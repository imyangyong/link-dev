import fs from 'fs'
import path from 'path'
import process from 'process'
import { red } from 'picocolors'

export interface Options {
  config?: string
}

export interface Config {
  path: string
}

const _config: Config = {
  path: ''
}

const checkExistsConfigFile = (
  _path: string | undefined = 'package.local.json'
) => {
  _config.path = path.join(process.cwd(), _path)
  return fs.existsSync(_config.path)
}

export default function configSet(options: Options) {
  const { config: path } = options
  if (!checkExistsConfigFile(path)) {
    console.log(red('link-dev: config file not found.'))
    process.exit(1)
  }

  return _config
}
