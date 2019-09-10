// ======================== nawigacja po lewej stronie =========================

let allLi = document.querySelectorAll(".main-app-menu li");
let arrayAllLi = [];

allLi.forEach(function (oneLi) {
    arrayAllLi.push(oneLi);
});

for (let i = 0; i < arrayAllLi.length; i++) {
    arrayAllLi[i].addEventListener("mouseover", function () {
        arrayAllLi[i].classList.add("visible");
    });

    arrayAllLi[i].addEventListener("mouseout", function () {
        arrayAllLi[i].classList.remove("visible");
    })
}



// ======================== wysyłanie formularza cz1 =========================

let input = document.querySelector(".main-app-input");
let btn = document.querySelector(".main-app-button");

btn.addEventListener("click", function () {
    if (input.value.length < 3 || input.value.length > 15) {
        input.value = "";
        return alert("Imię musi posiadać od 3 do 15 znaków.")
    }





    // ======================== local storage =========================

    let userName = input.value;
    localStorage.setItem("savedName", userName);

    console.log(localStorage.getItem("savedName"));






// ======================== wysyłanie formularza cz2 =========================

    let name = document.querySelector(".main-app-input-name");
    name.innerText = localStorage.getItem("savedName");

    let welcomeScreen = document.querySelector(".main-app-welcome-screen");
    welcomeScreen.style.display = "none";



// ======================== pokazanie pulpitu z funkcjami =========================

    let elementWithButtons = document.querySelector(".main-app-buttons");
    let buttons = elementWithButtons.querySelectorAll("button");
    console.log(buttons);


    buttons.forEach(function (el) {
        el.classList.add("visible");
    });
});