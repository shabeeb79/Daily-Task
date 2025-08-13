function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());













// function* count(n){
//    while(n<5){
//     yield n++;
//    }
// }
// let a = count(1)
//  console.log(a.next());
//   console.log(a.next());
//    console.log(a.next());
//     console.log(a.next());
//      console.log(a.next());
//     console.log(a.next());


function* hello(){
    yield 1;
    yield 2;
    yield 3;
}
let ab = hello()

 console.log(ab.next());
 console.log(ab.next());
 console.log(ab.next());
 console.log(ab.next());