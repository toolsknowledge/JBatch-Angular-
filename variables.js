var sub_one = "UI";
var sub_two = "Dot Net";
var sub_three = "SQLServer";
var fullstack = "".concat(sub_one, "....").concat(sub_two, "....").concat(sub_three);
console.log(fullstack);
//UI....Dot Net....SQLServer
var num = 100;
console.log(num); //100
var flag = true;
console.log(flag); //true
var var_one = "Hello";
var_one = 1000;
console.log(var_one); //1000
var var_two = "welcome to typescript";
console.log(var_two);
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [100, 200, 300, 400, 500];
console.log(arr1);
console.log(arr2);
var arr3 = ["hello_1", "hello_2", "hello_3", "hello_4", "hello_5"];
var arr4 = ["welcome_1", "welcome_2", "welcome_3", "welcome_4", "welcome_5"];
console.log(arr3);
console.log(arr4);
var arr5 = [true, false, true, false];
var arr6 = [false, true, false, true];
console.log(arr5);
console.log(arr6);
var obj = {
    "sub_one": "Angular14",
    "sub_two": "NodeJS",
    "sub_three": "MongoDB"
};
console.log(obj);
var arr7 = [
    { "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
    { "p_id": 222, "p_name": "p_two", "p_cost": 20000 }
];
var arr8 = [
    { "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
    { "p_id": 222, "p_name": "p_two", "p_cost": 20000 }
];
console.log(arr7);
console.log(arr8);
for (var i = 0; i < 5; i++) {
    console.log(i);
}
var arr9 = [1000, 2000, 3000, 4000, 5000];
var arr10 = ["Hello_1", "Hello_2", "Hello_3", "Hello_4", "Hello_5"];
arr9.forEach(function (element, index) {
    console.log(element, index);
});
