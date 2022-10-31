function calculator(...numbers){
 let sum = 0;
 for(let i of numbers){
     sum +=i;
 }
 console.log(sum);
}

calculator(1,2,3,4,5)