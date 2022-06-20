/*
    abstract class class_one{
        public func_one():any{
            return "hello_1";
        }
        abstract func_two():any;
    };
    class class_two extends class_one{
        public func_two():any {
            return "hello_2";
        }
    };
    let obj:class_two = new class_two();
    console.log( obj.func_one(), obj.func_two() );
    //hello_1 hello_2
*/
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
;
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.func_one = function () {
        return "Hello_1";
    };
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.func_two = function () {
        return "Hello_2";
    };
    return class_two;
}(class_one));
;
var obj = new class_two();
console.log(obj.func_one(), obj.func_two());
