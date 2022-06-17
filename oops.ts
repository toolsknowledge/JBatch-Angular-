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
/*
    class class_one{
        constructor(public arg1:any,
                    public arg2:any,
                    public arg3:any){}
    }
    let obj1:class_one = new class_one("Hello_1","Hello_2","Hello_3");
    console.log(
        obj1.arg1,obj1.arg2,obj1.arg3
    );
    //Hello_1 Hello_2 Hello_3
*/

/*
    class class_one{
        public var_one:string = "hello_1";
    };
    class class_two extends class_one{
        public var_two:string = "hello_2";
    };
    let obj:class_two = new class_two();
    console.log(obj.var_one, obj.var_two );
*/

/*
    class class_one{
        public func_one():string{
            return "Hello_1";
        }
    };
    class class_two extends class_one{
        public func_two():string{
            return "Hello_2";
        }
    };
    class class_three extends class_two{
        public func_three():string{
            return "Hello_3";
        }
    };
    let obj:class_three = new class_three();
    console.log( obj.func_one(), obj.func_two(), obj.func_three() );
*/

/*
class Parent1{}

class Parent2{}

class Child extends Parent1,Parent2{}
*/

/*
    class Parent{
        public var_one:string = "Hello_1";
    };
    class Child1 extends Parent{
        public var_two:string = "Hello_2";
    };
    class Child2 extends Parent{
        public var_two:string = "Hello_3";
    };
    class Child3 extends Parent{
        public var_two:string = "Hello_4";
    };
    let obj1:Child1 = new Child1();
    console.log( obj1.var_one, obj1.var_two );  //Hello_1   Hell_2

    let obj2:Child2 = new Child2();
    console.log( obj2.var_one, obj2.var_two );  //Hello_1   Hello_3

    let obj3:Child3 = new Child3();
    console.log( obj3.var_one, obj3.var_two );  //Hello_1   Hello_4
*/

/*
    class Parent{}

    class Child1 extends Parent{}

    class Child2 extends Parent{}

    class Child3 extends Child1,Child2{}
*/

/*
    class class_one{
        public func_one(param1:string,param2:string):void;
        public func_one(param1:number,param2:number):void;
        public func_one(param1:boolean,param2:boolean):void;
        public func_one(param1:any,param2:any):void{
            console.log(param1,param2);
        }
    };
    let obj:class_one = new class_one();
    obj.func_one("Hello_1","Hello_2");
    obj.func_one(100,200);
    obj.func_one(true,false);
*/
class Parent{
    public dbFun():string{
        return "data from sqlserver soon";
    }
};
class Child extends Parent{
    public dbFun(): string {
        return "data from mongodb soon";
    }
};
let obj:Child = new Child();
console.log( obj.dbFun() );
//data from mongodb soon













































































































