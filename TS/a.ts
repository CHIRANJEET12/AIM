// let x: number = 1;
// // x = "hello";
// const y: string = "hello";
// const z: boolean = true;
// let a: any = 1;
// a="hello";
// console.log(x, y, z);


// function greet(name: string, age: number){
//     console.log("Hello, " + name);
//     console.log("Age: " + age);
// }

// greet("4343",23);
// greet("World",233);
// greet(1);



// function add(x: number, y: number): number{
//     return x+y;
// }

// const value: number= add(2,2); //: number is not needed as ts gnerealises its type as due to type inference
// console.log(value);

//type inference
// function age(x: number){
//     let val: boolean = true;

//     if (x < 18) {
//         console.log(!val);
//         return false;
//     } else {
//         console.log(val);
//         return val;
//     }
// }

// let v
// age(117); // false
// console.log(v); //undefined as the function does not return anything when x<18


// function greet1(greet2: string){
//     setTimeout(()=>{
//         console.log(greet2);
//     },1000);
// }

// greet1("Hello World!"); // Hello World! after 1 second

// greet1(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.


// function isDelay(fn : ()=> void,delay: number){
//     setTimeout(fn,delay);
// }

// function greet2(name: string){
//     console.log("Hello, " + name);
// }

// isDelay(()=>{
//     greet2("World");
// },2000);


//interfaces

interface User {
    name: string;
    age: number;
}

function record(user: User){
    if (user.age < 18) {
        return false;
    } else {
        return true;
    }
}

const a = record({ name: "John", age: 13 });
console.log(a); 