import fs from 'fs'
import process, { cwd } from 'process'
import { Command } from 'commander'
import configSet, { Config } from './config'
import execa from 'execa'
import { cyan, red } from 'picocolors'

let config: Config | null = null

const linkPackages = () => {
  const packages = JSON.parse(fs.readFileSync(config!.path).toString())

  for (const [pkg, localUrl] of Object.entries(packages)) {
    ;(async () => {
      try {
        const { stdout } = await execa.command(`pnpm list ${pkg}`, {
          execPath: cwd()
        })

        let linked = false
        const matched = stdout.match(/link:/)
        if (matched && matched.length >= 1) {
          linked = true
        }

        if (!linked) {
          console.log(cyan(`正在初始化 ${pkg}, 请稍等...`))
          execa
            .command(`pnpm link ${localUrl}`, {
              execPath: cwd()
            })
            .stdout!.pipe(process.stdout)
        }
      } catch (error) {
        console.log(red(error as string))
      }
    })()
  }
}

export default function init(program: Command) {
  const options = program.opts()

  config = configSet(options)

  linkPackages()
}
