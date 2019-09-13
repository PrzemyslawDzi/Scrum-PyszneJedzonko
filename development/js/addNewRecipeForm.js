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
        let newDiv = document.createElement("div");
        newDiv.style.width = "100%";
        this.parentElement.appendChild(newDiv);
        let newEditTextarea = document.createElement("textarea");
        newEditTextarea.value = this.parentElement.firstElementChild.innerText;
        this.parentElement.lastElementChild.appendChild(newEditTextarea);
        let newEditSaveChangesButton = document.createElement("button");
        newEditSaveChangesButton.classList.add("saveChangesButton");
        this.parentElement.lastElementChild.appendChild(newEditSaveChangesButton);
        newEditSaveChangesButton.addEventListener("click", saveChanges);
    };

    function saveChanges(){
        if(this.parentElement.firstElementChild.value==""){
            alert("Błąd! Pole edycji jest puste!");
        }else{
        this.parentElement.parentElement.firstElementChild.innerText =  this.parentElement.firstElementChild.value;
        this.parentElement.parentElement.removeChild(this.parentElement.parentElement.lastElementChild);
        }
    }

    function deleteItem(){
        this.parentElement.parentElement.removeChild(this.parentElement);
    };

    addIngredientButton.addEventListener("click", function(){
        if(textareaRecipeIngredient.value==""){
            alert("Nie wpisano składnika!");
        }else{
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
        }
    });

    addInstructionButton.addEventListener("click", function(){
        if(textareaRecipeInstruction.value==""){
            alert("Nie wpisano instrukcji!");
        }else{
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
        }
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
        console.log(instructionsList.children.length);
        newRecipe.title = recipeName.value;
        newRecipe.description = recipeDescription.value;
        for(let i=0; i<instructionsList.children.length; i++){
            newRecipe.instructions.push(instructionsList.children[i].firstElementChild.innerText);
        };
        for(let i=0; i<ingredientsList.children.length; i++){
            newRecipe.ingredients.push(ingredientsList.children[i].firstElementChild.innerText);
        };
        if((recipeName.value=="")||(recipeDescription.value=="")||(instructionsList.children.length==0)||(ingredientsList.children.length==0)){
            if(recipeName.value==""){
                alert("Pole nazwa przepisu jest puste!");
            };
            if(recipeDescription.value==""){
                alert("Pole opis przepisu jest puste!");
            };
            if(instructionsList.children.length==0){
                alert("Nie dodano żadnych instrukcji!");
            };
            if(ingredientsList.children.length==0){
                alert("Nie dodano żadnych składników!");
            };
        }else{
        saveRecipeToLocalStorage(newRecipe);
        window.location.assign("./recipes.html");
        }
    });

});