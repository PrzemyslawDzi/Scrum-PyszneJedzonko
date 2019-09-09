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