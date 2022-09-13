function check_snt(n) {
  let flag = true;

  // Nếu n bé hơn 2 tức là không phải số nguyên tố
  if (n < 2) {
    flag = false;
  } else {
    // lặp từ 2 tới n-1
    for (var i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}
function hienthisonguyento() {
  let num1 = parseInt(document.querySelector("#num1").value);
  let num2 = parseInt(document.querySelector("#num2").value);
  let arr = [];

  let count = num1;
  let count2 = 0;
  while (count <= num2) {
    if (check_snt(count) == true) {
      arr[count2] = count;
      count2 = count2 + 1;
    }

    count = count + 1;
  }

  ganvaodiv(arr);
}



function ganvaodiv(arr) {
  var num = "<h1>Kết quả: </h1> ";
  for (i = 0; i < arr.length; i++) {
    num = num + arr[i] + " ";
  }
  document.querySelector("#kq").innerHTML = num;
}
// "<br/> : xuống dòng"
