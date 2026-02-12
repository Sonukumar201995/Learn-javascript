let btn = document.getElementById("btn");
let stopBtn = document.getElementById("stop");

function handleClick() {
  alert("Button clicked");
}

btn.addEventListener("click", handleClick);

stopBtn.addEventListener("click", function() {
  btn.removeEventListener("click", handleClick);
});
