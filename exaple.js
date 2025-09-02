// let person = {
//     name:"shabeeb",
//     batch:53,
//     obj:{
//         age:22,
//     }
// };

// let copy = Object.assign({},person)
//  copy.obj.age = 23;
// console.log(copy , person.obj.age);

// let deep = structuredClone(person)


// deep.obj.age=23
// console.log(deep);
// console.log(person);


let arr = [1,2,3,[4,5],6]
let copy = Array.from()

copy[3][0]=100
console.log(arr);
console.log(copy);


