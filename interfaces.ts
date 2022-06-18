//interface
//if we know only declarations, but we dont know implementations then we will choose interfaces
//we will declare interfaces by using "interface" keyword
//implementation provided by either "classes" or "json"

/*
    interface interface1{
        var_one:string;
        var_two:string;
        var_three:string;
    }
    class class_one implements interface1{
        var_one: string = "Hello_1";
        var_two: string = "Hello_2";
        var_three: string = "Hello_3";
    }
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.var_two, obj.var_three );
    //Hello_1 Hello_2 Hello_3
*/

/*
    interface interface1{
        func_one():void;
        func_two():void;
        func_three():void;
    };
    class class_one implements interface1{
        func_one(): void {
            console.log("Hello_1");
        }
        func_two(): void {
            console.log("Hello_2");
        }
        func_three(): void {
            console.log("Hello_3");
        }
    };
    let obj:class_one = new class_one();
    obj.func_one();
    obj.func_two();
    obj.func_three();
*/

/*
    interface interface1{
        var_one:string;
        func_one():string;
    }
    //json
    //java script object notation
    //{}
    //[]
    //key&value pairs
    //key & value separated by using ":"
    //key & value pairs separated by using ","
    let obj:interface1 = {
        var_one : "Hello_1",
        func_one : ():string=>{
            return "Hello_2"
        }
    };
    console.log( obj.var_one, obj.func_one() );
    //Hello_1 Hello_2
*/

/*
    interface interface1{
        var_one:string;
        var_two:string;
        var_three:string;

        func_one():string;
        func_two():string;
        func_three():string;
    };
*/

interface interface1{
    var_one:any;
}
interface interface2{
    var_two:any;
}
interface interface3 extends interface1,interface2{
    var_three:any;
}
let obj:interface3 = {
    var_one : "Hello_1",
    var_two : "Hello_2",
    var_three : "Hello_3"
};
console.log( obj.var_one, obj.var_two, obj.var_three );
//Hello_1 Hello_2 Hello_3





























