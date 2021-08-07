let userSelection;
let numberOfBoxes;
let gridContainer = document.querySelector("#gridContainer");
    
document.getElementById("submit").addEventListener("click", function() {
    userSelection = parseInt(document.getElementById("userSelection").value);
    numberOfBoxes = Math.pow(userSelection, 2);
    boxes();  
})

document.getElementById("reset").addEventListener("click", boxes)

function boxes() {
    document.querySelectorAll(".boxes").forEach(el => el.remove());
    document.documentElement.style.setProperty("--columns-row", userSelection);
    for (let i = 0; i < numberOfBoxes; i++) {
        let box = document.createElement("div");
        box.classList.add("boxes");
        gridContainer.appendChild(box);
        box.addEventListener('mouseover', e => e.target.classList.add('my-colour-class'))
    }
};
