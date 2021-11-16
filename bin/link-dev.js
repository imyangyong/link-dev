"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = __importDefault(require("process"));
var commander_1 = require("commander");
var core_1 = __importDefault(require("./core"));
var program = new commander_1.Command();
program.option('-conf, --config <path>', 'config file path');
program.parse(process_1.default.argv);
core_1.default(program);
