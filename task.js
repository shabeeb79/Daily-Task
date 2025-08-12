
function a(str){
  if(str.length <= 1){
    return str;
  }

   return a(str.slice(1))+str[0]
}
console.log(a("shabeeb"));

    setTimeout(ab,2000);
    console.log("data is fetching.....");
function ab(){
   console.log( "the data fetching is cleard");
}
 
