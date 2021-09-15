console.log("Simon");
console.log("asies");
console.log("como vez");
console.log("Esta vez");
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
    }
    A.prototype.ImprimirX = function (Otra) {
        console.log(Otra.x);
    };
    return A;
}());
var b = new A();
b.ImprimirX(new A());
