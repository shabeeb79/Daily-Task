function asynccawait(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("start");
        resolve();
    },1200)
    
});
}

function step1(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("step1 compleated");
         resolve();
    },1500)
   
});
}

function step2(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("step2 compleated");
            resolve();
    },1800)

});
}

function last(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
          // reject();
            resolve("executed");
        
    },2000)

});
}

async function running() {
    try
    {
       await asynccawait();
       await step1();
       await step2();
       await last();
       setTimeout(()=>{
        console.log("successfull program");
       },2000)
      

    }
    catch(error)
    
    {
     console.log("program failed");
     
    }
    
}

running()