"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var process_1 = __importDefault(require("process"));
var picocolors_1 = require("picocolors");
var _config = {
    path: ''
};
var checkExistsConfigFile = function (_path) {
    if (_path === void 0) { _path = 'package.local.json'; }
    _config.path = path_1.default.join(process_1.default.cwd(), _path);
    return fs_1.default.existsSync(_config.path);
};
function configSet(options) {
    var path = options.config;
    if (!checkExistsConfigFile(path)) {
        console.log(picocolors_1.red('link-dev: config file not found.'));
        process_1.default.exit(1);
    }
    return _config;
}
exports.default = configSet;
