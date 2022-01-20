let range = document.getElementById("fontSize");
let text = document.getElementById('txt');
let fontFamily = document.getElementById('fontFamily');
let output = document.getElementById('output');

console.log(range);
console.log(text);
console.log(fontFamily);
console.log(output);

function change() {
    console.log(range.value);
    console.log(text.value);
    console.log(fontFamily.value);
    output.style.fontSize = range.value + "px";
    output.style.fontFamily = fontFamily.value;
    output.innerHTML = text.value;
}