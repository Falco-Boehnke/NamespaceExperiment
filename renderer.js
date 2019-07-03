"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// ///<reference path="test/FileA.ts" />
// ///<reference path="test/FileB.ts" />
const FileA_1 = require("./test/FileA");
let tester = new FileA_1.Bugger();
tester.thathappened();
