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
        newEditSaveChangesButton.classList.add("saveChangesButton");
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
        newEditButton.classList.add("superedit");
        newLi.appendChild(newEditButton);
        let newDeleteButton = document.createElement("button");
        newDeleteButton.classList.add("superdelete");
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
        newEditButton.classList.add("superedit");
        newLi.appendChild(newEditButton);
        let newDeleteButton = document.createElement("button");
        newDeleteButton.classList.add("superdelete");
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
        window.location.assign("./recipes.html");
    });

});