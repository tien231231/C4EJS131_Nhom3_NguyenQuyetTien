// 1. Cho mảng A = [5,4,7,8,10,20,1], output -> [1,4,5,7,8,10,20] (hint: sử dụng hàm Array.sort)
// 2. Cho mảng B = [1,2,'a',{}, 'b', 'c', 2,4,5], output -> mảng C = [1,2,2,4,5] 
// 3. Cho mảng D = [1,4,10,100,50,69, 96], output -> số lớn nhất trong mảng, số nhỏ nhất trong mảng
// 4. Cho mảng E = [1,2,'a', 'b', 'c', 2,4,5], không sử dụng thêm mảng mới, đưa các số về đầu mảng và các chữ về cuối mảng, sử dụng các hàm pop, push, shift, unshift
// 5. Cho mảng F = [1,23,41,5,6,1,14,66,1124,1,1,55,15,0], tìm ra vị trí thứ 4 của số 1 trong mảng (hint: dùng findIndex)

//Bai 1
let A = [5,4,7,8,10,20,1];
console.log(A.sort((a,b) => a-b))

//Bai 2
let B = [1,2,'a',{}, 'b', 'c', 2,4,5];
let value
let C = [];
let numcheck = (value) => {
    if(Number.isInteger(value)) {
        C.push(value);
    }  
}
B.forEach(numcheck);
console.log(C)

//Bai3
let D = [1,4,10,100,50,69, 96];
D.sort((a,b)=>a-b)
console.log(D[D.length-1])
console.log(D[0])

//Bai4
let E = [1,2,'a','b','c', 2,4,5];

for(let i=0;i<=7;i++){
    if(typeof E[i] == 'string') {
        
         E.push(E[i])
         
        
    }
}
E.splice(2,3)
console.log(E) 
  
    

//Bai5
let F = [1,23,41,5,6,1,14,66,1124,1,1,55,15,0];
let count=0,count2=0;
let check4time1 = (v) => {
    count=count +1;


    if(v==1){
        count2=count2+1;
        if(count2==4){
            return count;
        }
    }

}

console.log(F.forEach(check4time1))