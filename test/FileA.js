"use strict";
// für reinen namespace
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
})(daTest || (daTest = {}));
// // Für export namespace
// export namespace daTest
// {
//     export class Bugger
//     {
//         thatSo: string = "It be.";
//         public thathappened(){
//             console.log(this.thatSo);
//         }
//     }
// }
