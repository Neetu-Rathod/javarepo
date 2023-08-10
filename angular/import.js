"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brand = /** @class */ (function () {
    function brand() {
    }
    brand.prototype.display1 = function () {
        return ("proId ".concat(this.proId, ",proName ").concat(this.proName, ",proColor ").concat(this.proColor));
    };
    brand.prototype.display = function () {
    };
    return brand;
}());
var ob = new brand();
ob.proId = 101;
ob.proName = "Cream";
ob.proColor = "white";
console.log(ob.display1());
