export var daTest;
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
