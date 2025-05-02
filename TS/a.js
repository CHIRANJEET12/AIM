"use strict";
// let x: number = 1;
// // x = "hello";
// const y: string = "hello";
// const z: boolean = true;
// let a: any = 1;
// a="hello";
// console.log(x, y, z);
function record(user) {
    if (user.age < 18) {
        return false;
    }
    else {
        return true;
    }
}
const a = record({ name: "John", age: 13 });
console.log(a);
