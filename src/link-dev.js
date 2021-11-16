"use strict";
exports.__esModule = true;
var process_1 = require("process");
var commander_1 = require("commander");
var core_1 = require("./core");
var program = new commander_1.Command();
program.option('-conf, --config <path>', 'config file path');
program.parse(process_1["default"].argv);
core_1["default"](program);
