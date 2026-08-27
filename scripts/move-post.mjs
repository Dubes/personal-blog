import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { movePost } from './post-mover.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const [mode, basename] = process.argv.slice(2)

if (!basename) {
  console.error(`Usage: yarn post:${mode || 'promote'} <post-basename>`)
  process.exitCode = 1
} else {
  try {
    const result = await movePost({
      mode,
      basename,
      root,
      validate: () =>
        new Promise((resolve, reject) => {
          const command = process.platform === 'win32' ? 'yarn.cmd' : 'yarn'
          const check = spawn(command, ['check'], {
            cwd: root,
            stdio: 'inherit',
          })
          check.on('error', reject)
          check.on('close', (code) => {
            if (code === 0) resolve()
            else reject(new Error(`yarn check exited with code ${code}`))
          })
        }),
    })

    console.log(
      `${mode === 'promote' ? 'Promoted' : 'Demoted'} ${path.relative(root, result.source)} -> ${path.relative(root, result.target)}`
    )
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
