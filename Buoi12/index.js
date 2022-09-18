function newElement() {
  var li = document.createElement("li");
  let p = document.createElement("p");
  var inputValue = document.querySelector('.reading-list__footer-input').value;
  var t = document.createTextNode(inputValue);
  
  p.appendChild(t);
  li.appendChild(p);
  if (inputValue === '') {
      alert("You must write something!");
  } else {
      document.querySelector('.reading-list__body-course').appendChild(li);
  }
  document.querySelector('.reading-list__footer-btn').value = "";

  for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
      }
  }

  const todoListCached = JSON.parse(localStorage.getItem('todoList')) // Array
  
  todoListCached.push(inputValue) // Array push
  localStorage.setItem('todoList', JSON.stringify(todoListCached)) // Cache nguoc lai
}

let todoList = document.querySelectorAll('.reading-list__body-item-p')
console.log(todoList)

        // console.log(todoList);

        const todoListToCache = []
        for (let index = 0; index < todoList.length; index++) {
            const element = todoList[index];
            console.log(element.textContent);
            // todoListCache.push(element.textContent.slice(0, -1))
            todoListToCache.push(element.textContent);
        }

        // Luu mang todo list vao local
        localStorage.setItem('todoList', JSON.stringify(todoListToCache))
        
        const todoListCached = JSON.parse(localStorage.getItem('todoList'))

        const list = document.querySelector('.reading-list__body-course')
        const liNew = []
        for (let index = 0; index < todoListCached.length; index++) {
            const listItem = todoListCached[index];
            const listItemHtml = document.createElement("li");
            listItemHtml.innerText = todoListCached[index];
            list.appendChild(listItemHtml);
        }