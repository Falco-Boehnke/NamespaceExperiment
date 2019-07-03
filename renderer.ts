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
// Tsconfig module-resolution = node hat auch nicht funktioniert, siehe https://stackoverflow.com/questions/46562367/electron-and-typescript-cannot-find-module-electron
///<reference path="test/FileA.ts" />
///<reference path="test/FileB.ts" />
let tester = new daTest.Bugger();





tester.thathappened();
