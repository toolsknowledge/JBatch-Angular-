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

/*
    abstract class class_one{
        public func_one():any{
            return "Hello_1";
        }
        public abstract func_two():any;
    }
    abstract class class_two extends class_one{
        public func_two():any {
            return "Hello_2";        
        }
        public abstract func_three():any;
    };
    class class_three extends class_two{
        public func_three():any{
            return "Hello_3";
        }
    }
    let obj:class_three = new class_three();
    console.log( obj.func_one(), obj.func_two(), obj.func_three() );
    //Hello_1 Hello_2 Hello_3
*/

interface interface1{
    func_one():any;
};
abstract class class_one implements interface1{
    func_one():any {
        return "Hello_1";        
    }
    abstract func_two():any;
};
class class_two extends class_one{
    func_two():any {
        return "Hello_2";
    }
};
let obj:class_two = new class_two();
console.log( obj.func_one(), obj.func_two() );
//Hello_1 Hello_2

















