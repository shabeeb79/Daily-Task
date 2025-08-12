// function a(a){
//     return function(b){
//         return a+b
//     }

// }
// console.log(a(10)(5));
// let namee ="shabeeb"
// function username(name){
//     return function pass(ps){
//         return function val(val){
//             if(val > ps.length){
//                 if(name === namee){
//                 console.log("succsessfull");
//             }
//         }else{
//             console.log("errrorrrrr");
            
//         }
//             return "error";
//         }
//     }
// }

// console.log(username("shabeeb")(123456)(5));


// let add = a=>b=> a+b;

// console.log(add(10)(30));


// function ac(...a){
//     return function(...b){
//         return a+b
//     }
// }

// console.log(ac(10)(20));

function sum(a) {
  let total = a;

  function inner(b) {
    // console.log(b);
    if (b !== undefined) {
      total += b;
      return inner;
    }

        return total;
    
  }
 return inner;
}

console.log(sum(10)(20)(30)(88)()); // 60
