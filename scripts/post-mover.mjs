import { access, mkdir, rename } from 'node:fs/promises'
import path from 'node:path'

const VALID_BASENAME = /^[a-z0-9][a-z0-9-]*$/

async function exists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

export async function movePost({
  mode,
  basename,
  root,
  validate = async () => {},
}) {
  if (mode !== 'promote' && mode !== 'demote') {
    throw new Error(`Unknown mode "${mode}". Use "promote" or "demote".`)
  }

  if (!VALID_BASENAME.test(basename)) {
    throw new Error(
      'Post name must contain only lowercase letters, numbers, and hyphens.'
    )
  }

  const sourceDirectory = mode === 'promote' ? 'drafts' : 'content'
  const targetDirectory = mode === 'promote' ? 'content' : 'drafts'
  const filename = `${basename}.mdx`
  const source = path.join(root, 'src', sourceDirectory, filename)
  const target = path.join(root, 'src', targetDirectory, filename)

  if (!(await exists(source))) {
    throw new Error(
      `Source post does not exist: ${path.relative(root, source)}`
    )
  }

  if (await exists(target)) {
    throw new Error(
      `Target post already exists: ${path.relative(root, target)}`
    )
  }

  await mkdir(path.dirname(target), { recursive: true })
  await rename(source, target)

  try {
    await validate()
  } catch (error) {
    await rename(target, source)
    throw new Error(`Validation failed; move was rolled back. ${error.message}`)
  }

  return { source, target }
}
