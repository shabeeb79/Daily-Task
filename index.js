
//first
let mark =[{"a":1,"b":2},{"c":3,"d":4},{"e":5},{"f":6}]
let [{a,b}]=mark
console.log({a,b});
let [{},...args]=mark
let x = [...args]
console.log(x);


//second
let [{},{c,d},...rest]=mark
console.log({c,d});

