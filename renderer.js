"use strict";
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Funktioniert als namespaces, nur verwendet man sie dann genauso wie module und dann
// ist es sinnlos. NAmespaces selbst funktionieren nicht, weil die im Electroncontext nicht
// auffindbar zu sein scheinen
// Für export namespace
//  import * as daTest2 from "./test/FileA";
//  let tester = new daTest2.daTest.Bugger();
// Für reinen namespace
///<reference path="test/FileA.ts" />
///<reference path="test/FileB.ts" />
let tester = new daTest.Bugger();
tester.thathappened();
