import fs from 'fs'
import path from 'path'
import process from 'process'
import { red } from 'picocolors'

const NPM_CONFIG_USER_AGENTS = ['npm', 'yarn', 'pnpm'] as const

export interface Options {
  config?: string
}

export interface Config {
  npm_config_user_agent: typeof NPM_CONFIG_USER_AGENTS[number]
  path: string
}

const _config: Config = {
  npm_config_user_agent: 'npm',
  path: ''
}

const checkExistsConfigFile = (
  _path: string | undefined = 'package.local.json'
) => {
  _config.path = path.join(process.cwd(), _path)
  return fs.existsSync(_config.path)
}

const setNpmUserAgent = () => {
  const agent = process.env.npm_config_user_agent?.match(/^.+\//)?.[1]
  if (
    agent &&
    NPM_CONFIG_USER_AGENTS.includes(
      agent as typeof NPM_CONFIG_USER_AGENTS[number]
    )
  ) {
    _config.npm_config_user_agent =
      agent as typeof NPM_CONFIG_USER_AGENTS[number]
  }
}

export default function configSet(options: Options) {
  const { config: path } = options
  if (!checkExistsConfigFile(path)) {
    console.log(red('link-dev: config file not found.'))
    process.exit(1)
  }

  setNpmUserAgent()

  return _config
}
