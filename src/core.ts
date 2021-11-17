import fs from 'fs'
import path from 'path'
import process, { cwd } from 'process'
import { Command } from 'commander'
import configSet, { Config } from './config'
import execa from 'execa'
import { cyan, yellow, red } from 'picocolors'

let config: Config | null = null

const linkPackages = () => {
  const packages = JSON.parse(
    fs.readFileSync(config!.path).toString()
  ) as Record<string, string>

  const npmUserAgent = config?.npm_config_user_agent

  for (const [pkg, localUrl] of Object.entries(packages)) {
    const absolutePkgPath =
      localUrl.substr(0, 1) === '.' ? path.join(cwd(), localUrl) : localUrl
    ;(async () => {
      try {
        let linked = false

        try {
          const { stdout } = await execa.command(`npm list ${pkg}`, {
            execPath: cwd()
          })

          const matched = stdout.match(/->\s(.+)/)
          if (matched && matched.length >= 2) {
            if (path.join(cwd(), matched[1]) === absolutePkgPath) {
              linked = true
            }
          }
        } catch (error) {
          console.log(yellow(`${pkg} are not installed in the project`))
        }

        if (!linked) {
          console.log(cyan(`正在初始化 ${pkg}, 请稍等...`))

          if (npmUserAgent === 'npm' || npmUserAgent === 'pnpm') {
            await execa
              .command(`${npmUserAgent} link ${absolutePkgPath}`, {
                execPath: cwd()
              })
              .stdout!.pipe(process.stdout)
          } else if (npmUserAgent === 'yarn') {
            await execa
              .command(`yarn link`, {
                execPath: absolutePkgPath
              })
              .stdout!.pipe(process.stdout)
            await execa
              .command(`yarn link ${pkg}`, {
                execPath: cwd()
              })
              .stdout!.pipe(process.stdout)
          }
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
