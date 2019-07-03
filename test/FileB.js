"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileATest = __importStar(require("./FileA"));
var daTest;
(function (daTest) {
    class FileB {
        translate() {
            let test = new fileATest.daTest.Bugger();
            console.log();
        }
    }
    daTest.FileB = FileB;
})(daTest = exports.daTest || (exports.daTest = {}));
