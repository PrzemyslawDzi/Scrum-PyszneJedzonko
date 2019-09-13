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


let name = document.querySelector(".main-app-input-name");
name.innerText = localStorage.getItem("savedName");



// ================= wczytywanie planow z local storage

if(localStorage.addPlan!=null) {
    dataFromLocalStorage = JSON.parse(localStorage.addPlan);

    for (let i = 0; i < dataFromLocalStorage.length; i++) {

        let newTrSche = document.createElement("tr");
        let mainTableSche = document.querySelector(".plan-list-main-table");
        mainTableSche.appendChild(newTrSche);
        console.log(mainTableSche);

        let newTdIdSche = document.createElement("td");
        newTdIdSche.classList.add("sche-list-id");
        newTrSche.appendChild(newTdIdSche);
        newTdIdSche.innerText = dataFromLocalStorage.indexOf(dataFromLocalStorage[i])+1;

        let newTdNameSche = document.createElement("td");
        newTdNameSche.classList.add("sche-list-name");
        newTrSche.appendChild(newTdNameSche);
        newTdNameSche.innerText = dataFromLocalStorage[i].PlanName;

        let newTdDescriptionSche = document.createElement("td");
        newTdDescriptionSche.classList.add("sche-list-description");
        newTrSche.appendChild(newTdDescriptionSche);
        newTdDescriptionSche.innerText = dataFromLocalStorage[i].PlanDescription;


        let newTdWeekSche = document.createElement("td");
        newTdWeekSche.classList.add("sche-list-week");
        newTrSche.appendChild(newTdWeekSche);
        newTdWeekSche.innerText = dataFromLocalStorage[i].PlanWeekNumber;


        let newTdActionSche = document.createElement("td");
        newTdActionSche.classList.add("sche-list-action");
        newTrSche.appendChild(newTdActionSche);

        let toCloneEdit = document.querySelector(".edit");
        let toCloneDelete = document.querySelector(".delete");

        let btnEdit = toCloneEdit.cloneNode(true);
        let btnDelete = toCloneDelete.cloneNode(true);

        btnEdit.style.display = "inline-block";
        btnEdit.zIndex = -100;
        btnDelete.style.display = "inline-block";
        btnDelete.zIndex = -100;

        newTdActionSche.appendChild(btnEdit);
        newTdActionSche.appendChild(btnDelete);

        btnEdit.addEventListener("click", function () {
            alert("Edycja przepisow pojawi się wkrotce")
        });

        btnDelete.addEventListener("click", function () {
            alert("Hejka!")
        });
    }
}