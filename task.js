
function a(str){
  if(str.length <= 1){
    return str;
  }

   return a(str.slice(1))+str[0]
}
console.log(a("shabeeb"));
