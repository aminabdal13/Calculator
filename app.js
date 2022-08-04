//██████████████████Aminabdal1313@gamil.com███████████████
// select the elements of the html we need to use in calculator 
const Buttons = document.querySelectorAll(".button");
const textbox = document.querySelector(".textbox");
const Asign = document.querySelector("#botto");
const Ac = document.querySelector(".bo1");
const Clear = document.querySelector(".bo2");
// ████████████████████████████████████████████████████████████
// set a forEach on the buttons(array) for add event to them with HandelSh→(show) function.
Buttons.forEach((item) => {
  item.addEventListener("click", HandelSh);
});
// ████████████████████████████████████████████████████████████
// this function handelled buttons to show on our display
function HandelSh(event) {
  let x = textbox.innerHTML;
  if (x == 0) {
    textbox.innerHTML = event.target.innerText;
    return x;
  }
  textbox.innerText += event.target.innerText;
}
// ████████████████████████████████████████████████████████████
// add a event to our asign buttom 
barabar.addEventListener("click", HandelAsign);
// ████████████████████████████████████████████████████████████
// this function handeled the asign buttom
function HandelAsign() {
  const result = textbox.innerHTML;
  if (result != 0) {
    textbox.innerHTML = eval(result);
  }
}
// ████████████████████████████████████████████████████████████
// add e event to our AC button to clear the values.
Ac.addEventListener("click", HandelAc);
// ████████████████████████████████████████████████████████████
// this function clear the all of values on a our display
function HandelAc() {
  const x = textbox.innerHTML;
  if (x != 0) {
    textbox.innerHTML = "0";
  }
}
// ████████████████████████████████████████████████████████████
// add a function to C button to clear one by one for Whenever we click
Clear.addEventListener("click", HandelClear);
// ████████████████████████████████████████████████████████████
// this function take all values then start from 0 to last value-1 and then clear last value 
function HandelClear() {
  const x = textbox.innerHTML;
  if (x != 0) {
    textbox.innerHTML = x.substring(0, x.length - 1);
    if (textbox.innerHTML == "") textbox.innerHTML = "0";
  }
}
//██████████████████Aminabdal1313@gamil.com███████████████
