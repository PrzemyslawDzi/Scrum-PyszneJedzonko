document.addEventListener('DOMContentLoaded', function() {

    let addNewRecipeButton = document.querySelector(".addNewRecipeButton");
    addNewRecipeButton.addEventListener("click", function(){
        window.location.assign("./addNewRecipeForm.html");
    }); 

});
