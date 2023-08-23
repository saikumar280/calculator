var display = document.getElementById("display");
function problem() {
  console.log(str1);
  console.log(str2);
  var sol = eval(str2 + " " + operand + " " + str1);
  return sol;
}
var str1 = "";
var str2 = "";
var operand;
function operation() {
  var value = this.getAttribute("data-value");
  console.log(value);
  if (value == "=") {
    var solution = problem();
    display.innerText = solution;
    console.log(solution);
  } else if (
    value == "+" ||
    value == "-" ||
    value == "*" ||
    value == "/" ||
    value == "%"
  ) {
    operand = value;
    str2 = str1;
    str1 = "";
    display.innerText += value;
  } else if (value == "AC") {
    display.innerText = "";
    str1 = "";
    str2 = "";
  } else {
    display.innerText += value;
    str1 += value;
  }
}
var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", operation);
}
