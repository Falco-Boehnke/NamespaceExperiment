import * as fileATest from "./FileA";
export var daTest;
(function (daTest) {
    class FileB {
        translate() {
            let test = new fileATest.daTest.Bugger();
            console.log();
        }
    }
    daTest.FileB = FileB;
})(daTest || (daTest = {}));
