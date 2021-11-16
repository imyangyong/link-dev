import process from 'process'
import { Command } from 'commander'

import init from './core'

const program = new Command()

program.option('-conf, --config <path>', 'config file path')

program.parse(process.argv)

init(program)
