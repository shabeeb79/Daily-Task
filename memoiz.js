//factorial of number by using recursion and memmoiz

 let cachee = [];
function squrenum(num){
   let number = num;
    if(cachee[number]){
        // console.log(number);
        
        console.log("cache",cache[number]);//5
        
        // return cache[number]
    }
    let result = number*number;
     console.log("result",result);
     cache[number] = result//25
   
    
    return result;
}
squrenum(5)
squrenum(5)
squrenum(5)
squrenum(25)
squrenum(25)


//same
let cacheee = [];
function facct(n){
    let num = n;
    if(n in cache){
        return "cache"+cache[num];
    }
    if(n===0){
        return 1;
    }
    let result =  num*facct(num-1)
      cache[num] = result;
       return result;
    }


console.log( facct(10));
console.log( facct(10));
console.log( facct(5));
console.log( facct(2));

//same

function memoizedFactorial() {
  const cache = {};

  return function factorial(n) {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return "cache"+cache[n];
    }
    console.log("Calculating result:", n);
    if (n === 0) return 1;

    const result = n * factorial(n - 1);
    cache[n] = result;
    return result;
  };
}

const factorial = memoizedFactorial();

console.log(factorial(40)); 
console.log(factorial(41));

// count numbers by using recursion and memoiz function
let cache=[];
function count(n){
    if(n in cache){
    return cache[n];
  }
  if(n === 0){
    return 0;
  }
  const result = n + count(n-1);
     cache[n] = result;
     return result;
}

console.log(count(10));
console.log(count(10));
console.log(count(10));
console.log(count(11));
console.log(count(12));