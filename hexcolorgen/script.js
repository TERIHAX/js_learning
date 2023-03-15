let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let mainBtn = document.getElementById("mainBtn");
let hexSpan = document.getElementById("hexSpan");

function mainBtnClick() {
    let hexCode = "";

    for (let i = 0; i < 6; i++) {
        hexCode += hex[Math.floor(Math.random() * 16)];
    }

    let hexResult = `#${hexCode}`;

    hexSpan.innerText = hexResult;
    hexSpan.style.color = hexResult;
    
    mainBtn.innerText = `${hexResult} | Generate Hex`;
    mainBtn.style.color = hexResult;

    document.body.style.backgroundColor = hexResult;
}