let button = document.querySelectorAll("button")
let omotac = document.getElementById("Omotac")
for (const element of button) {
    element.addEventListener("click",promeniPozadinu);
}

function promeniPozadinu(event){
    let clickedButton = event.target
    if (clickedButton.id === "Green") {
        document.body.style.backgroundColor = "green";
    } else if (clickedButton.id === "Red") {
        document.body.style.backgroundColor = "red";
    } else if (clickedButton.id === "Blue") {
        document.body.style.backgroundColor = "blue";
    } else if (clickedButton.id === "Random") {
        const red = Math.round(Math.random() * 255)
        const green = Math.round(Math.random() * 255)
        const blue = Math.round(Math.random() * 255)
    
        const color = `rgb(${red},${green},${blue})` 
        document.body.style.backgroundColor = color    
    }
}



