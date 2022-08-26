let user = {
    name:'Hieu',
    age:18,
    appearence:{
        hairColor:'black',
        skinColor:'yellow',
        height:1730,
        weight:62,
    }
}
let getkey = (obj)=>{
    
    for(key in obj) {
        
       
        console.log(key)
        console.log(obj[key])
        

    } 
    
}
getkey(user)

let insert =  (arr,index,element) => {
    arr.splice(index,0,element)
    
}
let array1 = [1,2,3]
insert(array1,1,5)
console.log(array1) 



