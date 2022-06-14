let sub_one:string = "UI";
let sub_two:string = "Dot Net";
let sub_three:string = "SQLServer";
let fullstack:string = `${sub_one}....${sub_two}....${sub_three}`;
console.log(fullstack);
//UI....Dot Net....SQLServer


let num:number = 100;
console.log(num);                   //100


let flag:boolean = true;
console.log(flag);              //true


let var_one:string | number = "Hello";
var_one = 1000;
console.log(var_one);       //1000


let var_two:any = "welcome to typescript";
console.log(var_two);


let arr1:number[] = [10,20,30,40,50];
let arr2:Array<number> = [100,200,300,400,500];
console.log(arr1);
console.log(arr2);


let arr3:string[] = ["hello_1","hello_2","hello_3","hello_4","hello_5"];
let arr4:Array<string> = ["welcome_1","welcome_2","welcome_3","welcome_4","welcome_5"];
console.log(arr3);
console.log(arr4);


let arr5:boolean[] = [true,false,true,false];
let arr6:Array<boolean> = [false,true,false,true];
console.log(arr5);
console.log(arr6);


let obj:any = {
    "sub_one" : "Angular14",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log(obj);

let arr7:any[] = [
    {"p_id":111,"p_name":"p_one","p_cost":10000},
    {"p_id":222,"p_name":"p_two","p_cost":20000}
];
let arr8:Array<any> = [
    {"p_id":111,"p_name":"p_one","p_cost":10000},
    {"p_id":222,"p_name":"p_two","p_cost":20000}
];
console.log(arr7);
console.log(arr8);

for(let i:number=0;i<5;i++){
    console.log(i);
}

let arr9:number[] = [1000,2000,3000,4000,5000];
let arr10:string[] = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
arr9.forEach((element,index)=>{
    console.log(element,arr10[index]);
});





















































