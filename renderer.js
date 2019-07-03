"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// ///<reference path="test/FileA.ts" />
// ///<reference path="test/FileB.ts" />
const fileATests = __importStar(require("./test/FileA"));
let tester = new fileATests.daTest.Bugger();
tester.thathappened();
