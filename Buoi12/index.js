let newElement = ()=> {
    var li = document.createElement("li");
    li.classList.add('reading-list__body-item')
    let p = document.createElement("p");
    p.classList.add('reading-list__body-item-p');
    let button = document.createElement("button");
    var dele = document.createTextNode('delete');
    button.classList.add('btn__primary')
    button.appendChild(dele);
  var inputValue = document.querySelector(".reading-list__footer-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(p);
  p.appendChild(t);
  li.appendChild(button);
  if (inputValue === "") {
    alert("Bạn phải viết gì đó :)))");
  } else {
    
    document.querySelector(".reading-list__body-course").appendChild(li);
  }
  document.querySelector(".reading-list__footer-input").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
}
