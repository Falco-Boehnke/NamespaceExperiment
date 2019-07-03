"use strict";
///<reference path="FileA.ts" />
var daTest;
(function (daTest) {
    class FileB {
        translate() {
            let test = new daTest.Bugger();
            console.log();
        }
    }
    daTest.FileB = FileB;
})(daTest || (daTest = {}));
