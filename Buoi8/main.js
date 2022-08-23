function can(n){
    if(n ==100)return 10;
    return Math.sqrt(n+can(n+1));
    
}

console.log(can(1));



// let count=0;
// for(let i=0;i<=1000;i++){
//     if(Number.isInteger(Math.sqrt(i))){
//         console.log(i)
//         count=count+1;
//     }
//  }
//  console.log("Có "+count+"số chính phương")
 
