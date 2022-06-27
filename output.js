// namespace JBatch{
//     export let name:string="Sathya";
// }
// namespace Namespace1{
//     export function func_one():void{
//         console.log("From Namespace1");
//     }
// }
var Namespace1;
(function (Namespace1) {
    var class_one = /** @class */ (function () {
        function class_one() {
            this.var_one = "Hello_1";
            this.var_two = "Hello_2";
            this.var_three = "Hello_3";
        }
        return class_one;
    }());
    Namespace1.class_one = class_one;
})(Namespace1 || (Namespace1 = {}));
// namespace IBatch{
//     export let name:string="Sathya Technologies";
// }
// namespace Namespace2{
//     export function func_one():void{
//         console.log("From Namespace2");
//     }
// }
var Namespace2;
(function (Namespace2) {
    var class_one = /** @class */ (function () {
        function class_one() {
            this.var_one = "welcome_1";
            this.var_two = "welcome_2";
            this.var_three = "welcome_3";
        }
        return class_one;
    }());
    Namespace2.class_one = class_one;
})(Namespace2 || (Namespace2 = {}));
/// <reference path="file1.ts" />
/// <reference path="file2.ts" />
// console.log( JBatch.name );
// console.log( IBatch.name );
// /// <reference path="file1.ts" />
// /// <reference path="file2.ts" />
// Namespace1.func_one();
// Namespace2.func_one();
///  <reference path="file1.ts" />
///  <reference path="file2.ts" />
var obj1 = new Namespace1.class_one();
console.log(obj1.var_one, obj1.var_two, obj1.var_three);
var obj2 = new Namespace2.class_one();
console.log(obj2.var_one, obj2.var_two, obj2.var_three);
