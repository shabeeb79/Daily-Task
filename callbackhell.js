 function a(callback){
    setTimeout(()=>{
        console.log("data fetched");
        callback({id:"23", name:"shabeeb"});
    },1000);
 }
 function b(username,callback){
    setTimeout(()=>{
        console.log(`the user name is ${username}`);
        callback({post:10})
    },1000)
 }
 function c(postid,callback){
    setTimeout(()=>{
        console.log(`the post number is ${postid}`);
        callback("greate post" )
    },1000)
 }

 a((username)=>{
    b(username.name,(postid) =>{
     c(postid.post,(comment)=>{
        setTimeout(()=>{
         console.log("all done");
        console.log("comment is",comment);
        },1000)
     })
    })
 })

   //second model
function a(id){
  setTimeout(()=>{
    console.log(`fetching datas of ${id}..`);
    setTimeout(()=>{
    console.log("fetching friend list..");
    setTimeout(()=>{
    console.log("fetching friend post...");
    setTimeout(()=>{
    console.log("fetching compleated...");
    
  },1000)
  },1000)
  },1000)
  },1000)

}

a(100)