let b = document.querySelector('button#b')


b.onclick = function () {
    main.style.background = "red";
};

let count =0;
let b2 = document.querySelector('button#b2');
function upElements(){
    
    
    b2.innerHTML = count;
    count= count+1;
    }  
let button = addEventListener('d')  