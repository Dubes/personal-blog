import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { movePost } from '../scripts/post-mover.mjs'

async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'observance-post-mover-'))
  await mkdir(path.join(root, 'src', 'content'), { recursive: true })
  await mkdir(path.join(root, 'src', 'drafts'), { recursive: true })
  return root
}

async function createPost(root, collection, basename, body = '# Post') {
  const filePath = path.join(root, 'src', collection, `${basename}.mdx`)
  await writeFile(filePath, body)
  return filePath
}

test('promotes a draft after successful validation', async () => {
  const root = await fixture()
  await createPost(root, 'drafts', 'my-post')

  const result = await movePost({ mode: 'promote', basename: 'my-post', root })

  assert.equal(await readFile(result.target, 'utf8'), '# Post')
})

test('demotes a published post', async () => {
  const root = await fixture()
  await createPost(root, 'content', 'my-post')

  const result = await movePost({ mode: 'demote', basename: 'my-post', root })

  assert.equal(await readFile(result.target, 'utf8'), '# Post')
})

test('rejects path traversal', async () => {
  const root = await fixture()

  await assert.rejects(
    movePost({ mode: 'promote', basename: '../my-post', root }),
    /only lowercase letters/
  )
})

test('does not overwrite an existing target', async () => {
  const root = await fixture()
  await createPost(root, 'drafts', 'my-post', '# Draft')
  await createPost(root, 'content', 'my-post', '# Published')

  await assert.rejects(
    movePost({ mode: 'promote', basename: 'my-post', root }),
    /already exists/
  )
})

test('rolls a move back when validation fails', async () => {
  const root = await fixture()
  const source = await createPost(root, 'drafts', 'my-post')

  await assert.rejects(
    movePost({
      mode: 'promote',
      basename: 'my-post',
      root,
      validate: async () => {
        throw new Error('invalid frontmatter')
      },
    }),
    /rolled back/
  )

  assert.equal(await readFile(source, 'utf8'), '# Post')
})
