"use strict";
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
///<reference path="test/FileA.ts" />
///<reference path="test/FileB.ts" />
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Funktioniert als namespaces, nur verwendet man sie dann genauso wie module und dann
// ist es sinnlos. NAmespaces selbst funktionieren nicht, weil die im Electroncontext nicht
// auffindbar zu sein scheinen
// Für export namespace
const daTest2 = __importStar(require("./test/FileA"));
let tester = new daTest2.daTest.Bugger();
// Für reinen namespace
// let tester = new daTest.Bugger();
tester.thathappened();
