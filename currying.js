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

// function sum(a) {
//   let total = a;

//   function inner(b) {
   
//     if (b !== undefined) {
//       total += b;
//       return inner;
//     }
//         return total;
    
//   }
//     return inner;
// }

// console.log(sum(10)(20)(30)(88)()); 

// function curry(a){
//   return function(b){
//     return a+b
  
//   }
// }
// console.log(curry(2)(3));

// function ab(a){
//   let total = a ;
//    function inner (b){
//     if(b !== undefined){
//        total +=b
//        return inner;
//     }
//     return total;
//   }
//    return inner;
// }
// console.log(ab(3)(4)(6)(8)());

// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                return [i,j]
                
//             }
//         }

        
//     }
// };
// console.log(
//  twoSum([1,2,3,4],5));
var maxprofit = function(price){
   // let x =Math.max(...price)
   // let y =Math.min(...price)
   // console.log(x,y);
   
   // if(price.indexOf(x)>price.indexOf(y)){
   //    return x-y;
   // }
   // return 0;
let j;
let i;
for( i=0;i<price.length;i++){
    for( j=i+1;j<price.length;j++){
        if(price[j]>price[i]){
            // console.log(price[j]);
            
            if(j>i){
            // console.log(price[j]);
            console.log(price[i])
        }else{
            return 0;
        }
    }

   }
   
}
;
}
console.log(maxprofit([7,1,5,3,6,4]))
