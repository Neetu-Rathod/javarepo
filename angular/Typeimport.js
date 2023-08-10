"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assignment_1 = require("./Assignment");
var School = /** @class */ (function () {
    function School() {
        this.students = [
            new Assignment_1.Student(101, 'jhon'),
            new Assignment_1.Student(102, 'Palak'),
        ];
    }
    School.prototype.display = function () {
        for (var i in this.students) {
            console.log(this.students[i]);
        }
    };
    return School;
}());
var Scl = new School();
Scl.display();
