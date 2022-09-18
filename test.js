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
        
        if(typeof key === 'object')
        {
            
        }
        console.log(key)
        

    } 
    
}
getkey(user)