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




// ======== sprawdzenie czy imię jest w local storage, jeśli tak to podmiana imienia ========


let name = document.querySelector(".main-app-input-name");
name.innerText = localStorage.getItem("savedName");



if (!(localStorage.getItem("savedName"))) {

    // ====== jeśli nie, to formularz do wpisania imienia cz1 ======

    let elementWithButtons = document.querySelector(".main-app-buttons");
    elementWithButtons.style.display = "none";

    let tableWithPlan = document.querySelector(".main-app-table");
    tableWithPlan.style.display = "none";


    let mainAppDashboard = document.querySelector(".main-app-welcome-screen");
    mainAppDashboard.style.display = "flex";



    let btn = document.querySelector(".main-app-button");

    btn.addEventListener("click", function () {
        let input = document.querySelector(".main-app-input");
        if (input.value.length < 3 || input.value.length > 15) {
            input.value = "";
            return alert("Imię musi posiadać od 3 do 15 znaków.")
        }


        // ======================== local storage =========================

        let userName = input.value;
        localStorage.setItem("savedName", userName);
        console.log(localStorage.getItem("savedName"));



// =======  podmienienie imienia na górze z local storage i ukrycie formularza =======

        name.innerText = localStorage.getItem("savedName");
        mainAppDashboard.parentElement.removeChild(mainAppDashboard);

        // mainAppDashboard.style.display = "none";


// ============== pokazanie pulpitu z funkcjami po wysłaniu formularza ==============

        elementWithButtons.style.display = "flex";

        tableWithPlan.style.display = "block";
    });
}






// ======================== dodaj nowy przepis =========================

let btnAddRecipe = document.querySelector(".main-app-add-recipe");
btnAddRecipe.addEventListener("click", function () {

    alert("Dodaj nowy przepis - taka funkcja będzie, jak już będzie layout")
});



// ======================== dodaj nowy plan =========================

let btnAddPlan = document.querySelector(".main-app-add-plan");
btnAddPlan.addEventListener("click", function () {

    alert("Dodaj nowy plan - taka funkcja będzie, jak już będzie layout")
});



// ============== zamykanie alertu przepisy ==============
let divWithAlerts = document.querySelector(".main-app-notifications");


let btnCloseRec = document.querySelector(".main-app-btn-recipies");
btnCloseRec.addEventListener("click", function () {
    let alertRec = document.querySelector(".main-app-notification-recipies");

    alertRec.parentElement.removeChild(alertRec);
});




// ============== zamykanie alertu plany ==============

let btnClosePln = document.querySelector(".main-app-btn-plan");
btnClosePln.addEventListener("click", function () {
    let alertPln = document.querySelector(".main-app-notification-plan");

    alertPln.parentElement.removeChild(alertPln);
});



// ============== zamykanie alertu welcome ==============

let btnCloseWlc = document.querySelector(".main-app-btn-welcome");
btnCloseWlc.addEventListener("click", function () {
    let alertWlc = document.querySelector(".main-app-notification-welcome");

    alertWlc.parentElement.removeChild(alertWlc);
});


// ============== btn tabela prev ==============
let btnPrev = document.querySelector("#prev");
console.log(btnPrev);
btnPrev.addEventListener("click", function () {
    alert("Nie ma czego zmieniac, bo nie ma zadnych planow")
});


// ============== btn tabela next ==============
let btnNext = document.querySelector("#next");
btnNext.addEventListener("click", function () {
    alert("Coś potrzeba???")
});

// Dodawanie nowego przepisu
document.addEventListener('DOMContentLoaded', function() {

    let addIngredientButton = document.querySelector(".addIngredient");
    let textareaRecipeIngredient = document.querySelector(".recipeIngredient");
    let ingredientsList = document.querySelector(".ingredients");

    let addInstructionButton = document.querySelector(".addInstruction");
    let textareaRecipeInstruction = document.querySelector(".recipeInstruction");
    let instructionsList = document.querySelector(".instructions");

    let saveAndCloseButton = document.querySelector(".saveAndCloseButton");
    let recipeName = document.querySelector(".recipeName");
    let recipeDescription = document.querySelector(".recipeDescription");

    let newRecipe = {
        title:"",
        description:"",
        instructions:[],
        ingredients:[]
    };
 
    function editItem(){
        let newBr = document.createElement("br");
        this.parentElement.appendChild(newBr);
        let newEditTextarea = document.createElement("textarea");
        newEditTextarea.value = this.parentElement.firstElementChild.innerText;
        this.parentElement.appendChild(newEditTextarea);
        let newEditSaveChangesButton = document.createElement("button");
        newEditSaveChangesButton.innerText = "Save changes";
        this.parentElement.appendChild(newEditSaveChangesButton);
        newEditSaveChangesButton.addEventListener("click", saveChanges);
    };

    function saveChanges(){
        this.parentElement.firstElementChild.innerText =  this.parentElement.children[4].value;
        this.parentElement.removeChild(this.parentElement.children[3]);
        this.parentElement.removeChild(this.parentElement.children[3]);
        this.parentElement.removeChild(this);
    }

    function deleteItem(){
        this.parentElement.parentElement.removeChild(this.parentElement);
    };

    addIngredientButton.addEventListener("click", function(){
        let newLi = document.createElement("li");
        let newP = document.createElement("p");
        newP.innerText = textareaRecipeIngredient.value;
        newLi.appendChild(newP);
        let newEditButton = document.createElement("button");
        newEditButton.innerText = "Edit";
        newLi.appendChild(newEditButton);
        let newDeleteButton = document.createElement("button");
        newDeleteButton.innerText = "Delete";
        newLi.appendChild(newDeleteButton);
        ingredientsList.appendChild(newLi);
        newEditButton.addEventListener("click", editItem);
        newDeleteButton.addEventListener("click", deleteItem);
        textareaRecipeIngredient.value = "";
    });

    addInstructionButton.addEventListener("click", function(){
        let newLi = document.createElement("li");
        let newP = document.createElement("p");
        newP.innerText = textareaRecipeInstruction.value;
        newLi.appendChild(newP);
        let newEditButton = document.createElement("button");
        newEditButton.innerText = "Edit";
        newLi.appendChild(newEditButton);
        let newDeleteButton = document.createElement("button");
        newDeleteButton.innerText = "Delete";
        newLi.appendChild(newDeleteButton);
        instructionsList.appendChild(newLi);
        newEditButton.addEventListener("click", editItem);
        newDeleteButton.addEventListener("click", deleteItem);
        textareaRecipeInstruction.value = "";
    });

    function saveRecipeToLocalStorage(object){
        let dataFromLocalStorage=[];
        if(localStorage.recipes!=null){
        dataFromLocalStorage = JSON.parse(localStorage.recipes);
        dataFromLocalStorage.push(object);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
        }else{
        dataFromLocalStorage.push(object);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
        }
        alert("Przepis zapisany do localStorage");
    }

    saveAndCloseButton.addEventListener("click", function(){
        console.log("zapisuje i zamykam no");
        newRecipe.title = recipeName.value;
        newRecipe.description = recipeDescription.value;
        for(let i=0; i<instructionsList.children.length; i++){
            newRecipe.instructions.push(instructionsList.children[i].firstElementChild.innerText);
        };
        for(let i=0; i<ingredientsList.children.length; i++){
            newRecipe.ingredients.push(ingredientsList.children[i].firstElementChild.innerText);
        };
        saveRecipeToLocalStorage(newRecipe);
    });
    
});
