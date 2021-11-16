"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var process_1 = require("process");
var picocolors_1 = require("picocolors");
var _config = {
    path: ''
};
var checkExistsConfigFile = function (_path) {
    if (_path === void 0) { _path = 'package.local.json'; }
    _config.path = path_1["default"].join(process_1["default"].cwd(), _path);
    return fs_1["default"].existsSync(_config.path);
};
function configSet(options) {
    var path = options.config;
    if (!checkExistsConfigFile(path)) {
        console.log(picocolors_1.red('link-dev: config file not found.'));
        process_1["default"].exit(1);
    }
    return _config;
}
exports["default"] = configSet;
