/*
    function func_one():void{
        console.log("welcome to functions");
    }
    func_one();         //welcome to functions
*/

/*
    function func_one(param1:string,param2:string,param3:string):void{
        console.log(param1,param2,param3);
    };
    //func_one();                           //Expected 3 arguments, but got 0.

    func_one("Hello_1","Hello_2","Hello_3") //Hello_1 Hello_2 Hello_3

    func_one(100,200,300);
        //Argument of type 'number' is not assignable to parameter of type 'string'.
*/

/*
    function func_one():string{
        return "welcome";
    }
    let res:string = func_one();
    console.log(res);
*/

/*
    function func_one():any{
        return true;
    }
    let res:any = func_one();
    console.log(res);
*/


/*
    function func_one(...param1:any[]):void{
        console.log(param1);
    }
    func_one("Hello_1","Hello_2");      //[ 'Hello_1', 'Hello_2' ]
    func_one(100,200,300);              //[ 100, 200, 300 ]
    func_one();                         //[]
*/
/*
    function func_one(param1:string="Hello_1",
                    param2:string="Hello_2",
                    param3:string="Hello_3"):void{
        console.log(param1,param2,param3);
    }
    func_one();                 
            //Hello_1 Hello_2 Hello_3
    func_one("welcome_1","welcome_2","welcome_3");
            //welcome_1 welcome_2 welcome_3
    func_one(undefined,undefined,undefined);
            //Hello_1 Hello_2 Hello_3
    //func_one(null,null,null);
            //Argument of type 'null' is not assignable to parameter of type 'string | undefined'.
*/


/*
    function func_one(param1:string,
                    param2:string="Hello_2",
                    ...param3:string[]):void{
        console.log(param1,param2,param3);
    }
    //func_one();           //Expected at least 1 arguments, but got 0.
    func_one("Hello_1");    //Hello_1 Hello_2 []
    func_one("Hello_1",undefined,"Hello_3");
                            //Hello_1 Hello_2 [ 'Hello_3' ]
*/


/*
    function func_one(param1?:string,param2?:string,param3?:string):void{
        console.log(param1,param2,param3);
    };
    func_one();                                 
                //undefined undefined undefined
    func_one("Hello_1","Hello_2","Hello_3");
                //Hello_1 Hello_2 Hello_3
*/



/*
    function func_one(param1:any,
                    param2:any="Hello_2",
                    param3?:any,
                    ...param4:any):void{
        console.log(param1,param2,param3,param4);
    }
    //func_one();   //Expected at least 1 arguments, but got 0.
*/



let func_one:any = (param1:any,param2:any,param3:any):any=>{
    console.log(param1,param2,param3);
}
func_one("Hello_1","Hello_2","Hello_3");    //Hello_1 Hello_2 Hello_3

































































