// fetch("https://catfact.ninja/facttttt")
// .then((res)=> res.json())
// .then(txt=> console.log(txt))
// .catch((err)=>{
//     throw new Error ("api fail",err);
    
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




fetch("https://jsonplaceholder.typicode.com/posts")
.then((data)=> data.json())
.then((res)=>{ console.log(res)})

// fetch('https://api.example.com/dataaa')
//   .then(response => {
//     if (!response) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.error('Error:', err));
// fetch('https://wrongurl.example.com/data') // wrong URL
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => {
//     console.error('Something went wrong:', error);
//   });
