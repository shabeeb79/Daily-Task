// let prom = new Promise((resolve,reject)=>{
//     let a =false;
//     setTimeout(()=>{
//     if(a){
//     resolve("succsess full");
//     }else{
//     reject("fail");
//     }
//     },1000)
   
// });
// prom
// .then((result)=>{
// console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
//     })
// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            console.log("addition is starting");
//           let res = a+b;
//           console.log(res);
//           resolve();
//         },1000)
//     })
// }

// function mul(a,b){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            console.log("mul is starting");
//          let  resu=a*b;
//           console.log(resu);
//           resolve();
//         },1500)
//     })
// }
// function div(a,b){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          console.log("div is starting");
//           console.log(a-b);
//           resolve();
//         },2000)
//     })
// }
// add(3,3)
// .then(res=> mul(res,5))
// .then(resu=>div(resu,3))
// .then(()=>{
//   setTimeout(()=>{
//  console.log("completed");
//   },2500)
 
  
// })
// .catch(()=>{
//   console.log("error")})


function nn(){
 return new Promise((resolve,reject)=>{ setTimeout(()=>{
    if(val = false)
    resolve("succsess full")
    reject("error")
},4000)
})
}

function n(){
 return new Promise((resolve,reject)=>{ setTimeout(()=>{
    if(val = false)
    resolve("succsess full")
    reject("error")
},4000)
})
 }

function c(){
 return new Promise((resolve,reject)=>{ setTimeout(()=>{
    if(val = false)
    resolve("succsess full")
    reject("error")
},4000)
})
}
function b(){
 return new Promise((resolve,reject)=>{ setTimeout(()=>{
    if(val = false)
    resolve("succsess full")
    reject("error")
},4000)
})
}
function a(){
 return new Promise((resolve,reject)=>{ setTimeout(()=>{
    if(val = false)
    resolve("succsess full")
    reject("error34567890456789")
},1000)
})
}
// prom
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
  
// });

Promise.race([n(),nn(),c(),b(),a()]).then((res)=>{
  console.log(res);
  
}).catch((res)=>{
   console.log(res);
   
})