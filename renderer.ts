// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// ///<reference path="test/FileA.ts" />
// ///<reference path="test/FileB.ts" />
import {Bugger} from "./test/FileA";

let tester: Bugger = new Bugger();
tester.thathappened();
