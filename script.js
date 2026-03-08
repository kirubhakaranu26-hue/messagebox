const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const remaining = document.getElementById("remaining");
const warning = document.getElementById("warning");
const maxChars = 200;
function updateCounter() {
 let length = textarea.value.length;
 let remain = maxChars - length;
 counter.textContent = length + " / " + maxChars;
 remaining.textContent = remain + " remaining";
 if (remain <= 20 && remain > 0) {
   textarea.classList.add("warning");
   warning.textContent = "You are close to the character limit.";
 } else if (remain === 0) {
   textarea.classList.remove("warning");
   textarea.classList.add("limit");
   warning.textContent = "Character limit reached!";
 } else {
   textarea.classList.remove("warning");
   textarea.classList.remove("limit");
   warning.textContent = "";
 }
}
textarea.addEventListener("input", updateCounter);
updateCounter();