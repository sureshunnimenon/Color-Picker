
let boxes = document.querySelectorAll(".colBox");
let colors = [];

for (let i=0; i<boxes.length; i++){
    let rChannel = Math.floor(Math.random()* 256);
    let gChannel = Math.floor(Math.random()* 256);
    let bChannel = Math.floor(Math.random()* 256);
    let randColor = `rgb(${rChannel}, ${gChannel}, ${bChannel})`;
    colors.push(randColor);
}
let pickedColor = colors[Math.floor(Math.random()*colors.length)];
document.querySelector(".hdr-random_color").innerHTML = `<b>Color ${pickedColor}) </b> `


for (let i=0; i<boxes.length; i++){
    // fill in colors from the color array
    boxes[i].style.backgroundColor = colors[i];
    // when clicked, compare the color to pickedcolor and if different, make invisible
    boxes[i].addEventListener("click", (e) => {
        (e.target.style.backgroundColor !== pickedColor) ? incorrect(e) : colorAllSame(e.target.style.backgroundColor);
         })}


function incorrect(e){
    e.target.style.visibility = 'hidden';
    document.querySelector(".msg").innerHTML = `Try again`
    document.querySelector(".msg").style.color = "red";
}

function colorAllSame(col){
    for (let i=0; i<boxes.length; i++){
        boxes[i].style.backgroundColor = col;
    }
    document.querySelector(".msg").innerHTML = `Very Good! Correct!`
    document.querySelector(".msg").style.color = "rgb(42, 165, 104)";
}

window.document.querySelector("#new").addEventListener("click", () => window.location.reload());

