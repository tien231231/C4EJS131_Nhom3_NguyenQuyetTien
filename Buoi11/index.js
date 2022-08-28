let b = document.querySelector('button#b')
let b2 = document.querySelector('button#b2')

b.onclick = function () {
    main.style.background = "red";
};

let count =0;
    b2.onclick = function(){
        b2.innerHTML = count ;
        count= count+1;

    };