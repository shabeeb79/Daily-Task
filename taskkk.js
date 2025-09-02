// fetch("https://dummyjson.com/carts")
// .then((data)=> data.json())
// .then((res)=>{
//     console.log(res.carts.slice(0,1));
// })
// .catch((err)=>{
//     console.log("api failed",err);
    
// })

// async function run() {
  
//     let data = await fetch("https://dummyjson.com/carts")
//     let res =  await data.json()
//     console.log(res.carts.slice(0,1));
//     }

    

// run()


// let res = arr.filter((a,b)=>{a>b?a:b;
//     console.log(a)
    
// });

// const p1=()=>{setTimeout(()=>{
// fetch("https://dummyjson.com/carts").then((data)=>data.json());
// },1000)} 
// const p2=()=>{setTimeout(()=>{
// fetch("https://dummyjson.com/carts").then((data)=>data.json());
// },3000)}
// const p3=()=>{setTimeout(()=>{
// fetch("https://dummyjson.com/carts").then((data)=>data.json());
// },2000)}


// Promise.race([p1(),p2(),p3()]).then(([a,b,c])=>{
//     console.log(a,b,c);
 
// })
//  .catch((err)=>{
//         console.log(err);     
//  })

// function p1() {
//   return new Promise((reject) => {
//     setTimeout(() => {
//       fetch("https://doooooummyjson.com/carts")
//         .then((res) => res.json())
//         .then((data) => reject(data));
//     }, 1000);
//   });
// };

// function p2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       fetch("https://dummyjson.com/carts")
//         .then((res) => res.json())
//         .then((data) => resolve(data+"hhhhh"));
//     }, 3000);
//   });
// };

// let p3 = new Promise((resolve) => {
//     setTimeout(() => {
//       fetch("https://dummyjson.com/carts")
//         .then((res) => res.json())
//         .then((data) => resolve(data));
//     }, 2000);
//   });

// Promise.any([p1(), p2(), p3])
//   .then((result) => {
//     console.log("First response:", result);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });




// var maxprofit = function(price){
   

   // let y = Math.min(...price)
   // let c = price.indexOf(y)
   
   // let res = price.slice(c)
   // let x =Math.max(...res)
   // let y =Math.min(...)
   // console.log(x,y);
   
//    if(price.indexOf(x)>price.indexOf(y)){
//       return x-y;
//    }
//    return 0;
//   }
//    console.log( maxprofit([5,4,3,2,1]));
let nums =[null,{},3]
Array.prototype.last = function(...arr) {
 let val = arr.JSON.parse()
 console.log(val);
 
}
this.last([null,{},3])