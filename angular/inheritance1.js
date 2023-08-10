// class Car
// {
//    Name:string;
//    constructor(name:string)
//    {
//       this.Name=name;
//    }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Mahendra extends Car
// {
//     Color:string;
//     Price:number;
//     constructor(name :string,color:string,price:number)
//     {
//         super(name,color)
//         this.Color=color;
//         this.Price=price;
//     }
//     display():void{
//         console.log("Name  of Car = "+this.Name);
//         console.log("Color of Car = "+this.Color);
//         console.log("Price of Car = "+this.Price);
//     }
// }
// let ob= new Mahendra("Audi","Black",400000);
// ob.display();
var Shape = /** @class */ (function () {
    function Shape(area) {
        this.Area = area;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(Area, color) {
        var _this = _super.call(this, Area) || this;
        _this.Color = color;
        return _this;
    }
    Circle.prototype.display = function () {
        console.log("Area of Circle = " + this.Area);
        console.log("Color of Circle = " + this.Color);
    };
    return Circle;
}(Shape));
var obj = new Circle(320, "white");
obj.display();
// let obj1 = new Circle("white");
// obj1.display();
