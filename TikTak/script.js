var top_1 = document.getElementById("top-1");
var top_2 = document.getElementById("top-2");
var top_3 = document.getElementById("top-3");

var middle_1 = document.getElementById("middle-1");
var middle_2 = document.getElementById("middle-2");
var middle_3 = document.getElementById("middle-3");

var bottom_1 = document.getElementById("bottom-1");
var bottom_2 = document.getElementById("bottom-2");
var bottom_3 = document.getElementById("bottom-3");

var tic_tac = document.getElementById("tic_tac");
var count = 1;
var p =1;
var button_1 = 1,
  button_2 = 1,
  button_3 = 1,
  button_4 = 1,
  button_5 = 1,
  button_6 = 1,
  button_7 = 1,
  button_8 = 1,
  button_9 = 1;

top_1.addEventListener("click", function() {
 // win();
  if (button_1 == 1) {
    button(top_1,win);
    button_1++;
  }
  p++
});

top_2.addEventListener("click", function() {
// win();
  if (button_2 == 1) {
    button(top_2,win);
    button_2++;
  }
  p++
});

top_3.addEventListener("click", function() {
  //console.log(top_1)
  //win();
  if (button_3 == 1) {
    button(top_3,win);
    button_3++;
  }
  p++
});

middle_1.addEventListener("click", function() {
  //console.log(top_1)
  
  if (button_4 == 1) {
    button(middle_1,win);
    button_4++;
  }
  p++
 // win()
  //button(middle_1)
});

middle_2.addEventListener("click", function() {
  //console.log(top_1)
  //win();
  if (button_5 == 1) {
    button(middle_2,win);
    button_5++;
  }
  p++
  //button(middle_2)
});

middle_3.addEventListener("click", function() {
  //console.log(top_1)
 // win();
  if (button_6 == 1) {
    button(middle_3,win);
    button_6++;
  }
  p++
  //button(middle_3)
});

bottom_1.addEventListener("click", function() {
  //console.log(top_1)
  //win();
  if (button_7 == 1) {
    button(bottom_1,win);
    button_7++;
  }
  p++
  //button(bottom_1)
});

bottom_2.addEventListener("click", function() {
  //console.log(top_1)
 // win();
  if (button_8 == 1) {
    button(bottom_2,win);
    button_8++;
  }
  p++
  //button(bottom_2)
});

bottom_3.addEventListener("click", function() {
  //console.log(top_1)
 // win();
  if (button_9 == 1) {
    button(bottom_3,win);
    button_9++;
  }
  p++
  // button(bottom_3)
});

function button(x,callback) {
  if (count == 1) {
    x.innerHTML = "X";
    count++;    
  } else {
    x.textContent = "O";
    count--;
  }
  console.log(top_1.textContent)
callback()
}
 
 function win() { 
  // console.log(top_1.value) 
   console.log(p)
    if (
       top_1.textContent == 'X' && top_2.textContent == 'X' && top_3.textContent == 'X' ||
       middle_1.textContent == 'X' && middle_2.textContent == 'X' && middle_3.textContent == 'X' ||
       bottom_1.textContent == 'X' && bottom_2.textContent == 'X' && bottom_3.textContent == 'X' ||
       top_1.textContent == 'X' && middle_1.textContent == 'X' && bottom_1.textContent == 'X'||
       top_2.textContent == 'X' && middle_2.textContent == 'X' && bottom_2.textContent == 'X'||
       top_3.textContent == 'X' && middle_3.textContent == 'X' && bottom_3.textContent == 'X'||
       top_1.textContent == 'X' && middle_2.textContent == 'X' && bottom_3.textContent == 'X'||
       top_3.textContent == 'X' && middle_2.textContent == 'X' && bottom_1.textContent == 'X' 
    ){
      alert("Player-1 Wins");
    } 
    else if (
      (top_1.textContent == 'O' && top_2.textContent == 'O' && top_3.textContent == 'O') ||
      (middle_1.textContent == 'O' && middle_2.textContent == 'O' && middle_3.textContent == 'O') ||
      (bottom_1.textContent == 'O' && bottom_2.textContent == 'O' && bottom_3.textContent == 'O') ||
      (top_1.textContent == 'O' && middle_1.textContent == 'O' && bottom_1.textContent == 'O') ||
      (top_2.textContent == 'O' && middle_2.textContent == 'O' && bottom_2.textContent == 'O') ||
      (top_3.textContent == 'O' && middle_3.textContent == 'O' && bottom_3.textContent == 'O') ||
      (top_1.textContent == 'O' && middle_2.textContent == 'O' && bottom_3.textContent == 'O') ||
      (top_3.textContent == 'O' && middle_2.textContent == 'O' && bottom_1.textContent == 'O')
    ) {
      alert("Player-2 Wins");
    }
   else if(p>=9){
      alert("Draw")
    }

}



