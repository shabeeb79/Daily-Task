// fetch("https://catfact.ninja/fact")
// .then((res)=> res.json())
// .then(txt=> console.log(txt))
// .catch(()=>{
//     console.log("api fail");
    
// });

// async function run(){
//    let data = await fetch("https://catfact.ninja/fact");
//      console.log(data);
     
// }



// fetch("https://catfact.ninja/fact", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ name: 'Alice' })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(res=> console.log(res)
// );

async function run() {
    try{
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let post = await data.json()
    console.log(post.slice(0,5));
    }
    catch(error){
        console.log("it contain",error.console);
        
    }
    
}
run()