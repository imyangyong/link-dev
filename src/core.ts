import fs from 'fs'
import path from 'path'
import process, { cwd } from 'process'
import { Command } from 'commander'
import configSet, { Config } from './config'
import execa from 'execa'
import { cyan, red } from 'picocolors'

let config: Config | null = null

const linkPackages = () => {
  const packages = JSON.parse(
    fs.readFileSync(config!.path).toString()
  ) as Record<string, string>

  for (const [pkg, localUrl] of Object.entries(packages)) {
    const absolutePkgPath =
      localUrl.substr(0, 1) === '.' ? path.join(cwd(), localUrl) : localUrl
    ;(async () => {
      try {
        const { stdout } = await execa.command(`npm list ${pkg}`, {
          execPath: cwd()
        })

        let linked = false
        let matched = stdout.match(/->\s(.+)/)
        if (matched && matched.length >= 2) {
          if (path.join(cwd(), matched[1]) === absolutePkgPath) {
            linked = true
          }
        }

        if (!linked) {
          console.log(cyan(`正在初始化 ${pkg}, 请稍等...`))
          execa
            .command(`npm link ${absolutePkgPath}`, {
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
