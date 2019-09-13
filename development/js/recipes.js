document.addEventListener('DOMContentLoaded', function() {

    let addNewRecipeButton = document.querySelector(".addNewRecipeButton");
    addNewRecipeButton.addEventListener("click", function(){
        window.location.assign("./addNewRecipeForm.html");
    }); 

});

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



// ================= wczytywanie przepisow z local storage
if(localStorage.recipes!=null) {
    dataFromLocalStorage = JSON.parse(localStorage.recipes);

    for (let i = 0; i < dataFromLocalStorage.length; i++) {

        let newTr = document.createElement("tr");
        let mainTable = document.querySelector(".recipes-list-main-table");
        mainTable.appendChild(newTr);

        let newTdId = document.createElement("td");
        newTdId.classList.add("recipes-list-id");
        newTr.appendChild(newTdId);
        newTdId.innerText = dataFromLocalStorage.indexOf(dataFromLocalStorage[i])+1;

        let newTdName = document.createElement("td");
        newTdName.classList.add("recipes-list-name");
        newTr.appendChild(newTdName);
        newTdName.innerText = dataFromLocalStorage[i].title;

        let newTdDescription = document.createElement("td");
        newTdDescription.classList.add("recipes-list-description");
        newTr.appendChild(newTdDescription);
        newTdDescription.innerText = dataFromLocalStorage[i].description;

        let newTdAction = document.createElement("td");
        newTdAction.classList.add("recipes-list-action");
        newTr.appendChild(newTdAction);

        let toCloneEdit = document.querySelector(".edit");
        let toCloneDelete = document.querySelector(".delete");

        let btnEdit = toCloneEdit.cloneNode(true);
        let btnDelete = toCloneDelete.cloneNode(true);

        btnEdit.style.display = "inline-block";
        btnEdit.zIndex = -100;
        btnDelete.style.display = "inline-block";
        btnDelete.zIndex = -100;

        newTdAction.appendChild(btnEdit);
        newTdAction.appendChild(btnDelete);

        btnEdit.addEventListener("click", function () {
            alert("Edycja przepisow pojawi się wkrotce")
        });

        btnDelete.addEventListener("click", function () {
            newTr.parentElement.removeChild(newTr);
            alert("Ogolnie usuwa wpis, ale tylko z html a nie local storage")
        });
    }
}