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

// TO KOPIA Z RECIPES
// if(localStorage.recipes!=null) {  // zmienic recipies na klucz Przemka
//     dataFromLocalStorage = JSON.parse(localStorage.recipes); // tak samo
//
//     for (let i = 0; i < dataFromLocalStorage.length; i++) {
//
//         let newTr = document.createElement("tr");
//         let mainTable = document.querySelector(".recipes-list-main-table");
//         mainTable.appendChild(newTr);
//
//         let newTdId = document.createElement("td");
//         newTdId.classList.add("col-1");
//         newTr.appendChild(newTdId);
//         newTdId.innerText = dataFromLocalStorage.indexOf(dataFromLocalStorage[i])+1; // poprawic
//
//         let newTdName = document.createElement("td");
//         newTdName.classList.add("col-3");
//         newTr.appendChild(newTdName);
//         newTdName.innerText = dataFromLocalStorage[i].title;
//
//         let newTdDescription = document.createElement("td");
//         newTdDescription.classList.add("col-9");
//         newTr.appendChild(newTdDescription);
//         newTdDescription.classList.add("recipes-list-description");
//         newTdDescription.innerText = dataFromLocalStorage[i].description;
//
//         let newTdWeek = document.createElement("td");
//         newTdName.classList.add("col-3");
//         newTr.appendChild(newTdWeek);
//         newTdName.innerText = dataFromLocalStorage[i].title;
//
//
//         let newTdAction = document.createElement("td");
//         newTdAction.classList.add("col-2");
//         newTr.appendChild(newTdAction);
//
//         let toCloneEdit = document.querySelector(".edit");
//         let toCloneDelete = document.querySelector(".delete");
//
//         let btnEdit = toCloneEdit.cloneNode(true);
//         let btnDelete = toCloneDelete.cloneNode(true);
//
//         btnEdit.style.display = "inline-block";
//         btnDelete.style.display = "inline-block";
//
//         newTdAction.appendChild(btnEdit);
//         newTdAction.appendChild(btnDelete);
//
//         btnEdit.addEventListener("click", function () {
//             alert("Edycja planow pojawi się wkrotce")
//         });
//
//         btnDelete.addEventListener("click", function () {
//             newTr.parentElement.removeChild(newTr);
//             alert("Ogolnie usuwa wpis, ale tylko z html a nie local storage i trzeba jeszcze poprawic")
//         });
//     }
// }