let numSpan = document.getElementById("num-span");

document.getElementById("container-div").addEventListener("click", e => {
    switch (e.target.innerText.toLowerCase())
    {
        case "increase":
            +numSpan.innerText++;

            numSpan.innerText.includes("-") ? numSpan.style.color = "red" : numSpan.style.color = "black";
            break;

        case "decrease":
            +numSpan.innerText--;

            numSpan.innerText.includes("-") ? numSpan.style.color = "red" : numSpan.style.color = "black";
            break;

        case "reset":
            numSpan.innerText = 0;
            numSpan.style.color = "black";
            break;
    }
});