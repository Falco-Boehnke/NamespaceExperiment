"use strict";
// namespace daTest
// {
//     export class Bugger
//     {
//         thatSo: string = "It be.";
Object.defineProperty(exports, "__esModule", { value: true });
//         public thathappened(){
//             console.log(this.thatSo);
//         }
//     }
// }
var daTest;
(function (daTest) {
    class Bugger {
        constructor() {
            this.thatSo = "It be.";
        }
        thathappened() {
            console.log(this.thatSo);
        }
    }
    daTest.Bugger = Bugger;
})(daTest = exports.daTest || (exports.daTest = {}));
