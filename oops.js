//class
//collection of variables and functions called as class
//we can create classes by using "class" keyword
//we can create object to the class by using "new" keyword
//recomended modifier for variables is "private"
//recomended modifier for functions is "public"
//we can declare the constructors by using "constructor" keyword
/*
    class class_one{
        private sub_one:string = "UI";
        private sub_two:string = "Dot Net";
        private sub_three:string = "SQLServer";
        public getSubOne():string{
            return this.sub_one;
        }
        public getSubTwo():string{
            return this.sub_two;
        }
        public getSubThree():string{
            return this.sub_three;
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.getSubOne(), obj.getSubTwo(), obj.getSubThree() );
    //UI Dot Net SQLServer
*/
//private members we can't access by using class objects
//private members won't accessable to child classes
/*
    class class_one{
        private var_one:string = "Hello";
    };
    let obj:class_one = new class_one();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/
/*
    class class_one{
        private var_one:string = "Hello";
    }
    class class_two extends class_one{
        
    }
    let obj:class_two = new class_two();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/
//public
//public members we can access by using class objects
//public members accessable to child classes
/*
class class_one{
    public var_one:string = "Hello";
};
let obj:class_one = new class_one();
console.log(obj.var_one);       //Hello
*/
/*
    class class_one{
        public var_one:string = "Hello";
    }
    class class_two extends class_one{

    }
    let obj:class_two = new class_two();
    console.log( obj.var_one );     //Hello
*/
/*
    class class_one{
        protected var_one:any = "Hello";
    };
    let obj:class_one = new class_one();
    obj.var_one;
    //Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
*/
/*
    class class_one{
        protected var_one:any = "Hello";
    };
    class class_two extends class_one{
        public my_var:any = this.var_one;
    };
    let obj:class_two = new class_two();
    //obj.var_one;
    //Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.

    console.log(obj.my_var);  //Hello
*/
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return class_one;
}());
var obj1 = new class_one("Hello_1", "Hello_2", "Hello_3");
console.log(obj1.arg1, obj1.arg2, obj1.arg3);
