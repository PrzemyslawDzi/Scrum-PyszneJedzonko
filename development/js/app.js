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
    window.location.assign("./addNewRecipeForm.html");
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
btnPrev.addEventListener("click", function () {
    alert("Nie ma czego zmieniac, bo nie ma zadnych planow")
});


// ============== btn tabela next ==============
let btnNext = document.querySelector("#next");
btnNext.addEventListener("click", function () {
    alert("Coś potrzeba???")
});


//==============creating new plan ===========================

let wholeRecipe =localStorage.getItem('recipes');
let recipeName = JSON.parse(wholeRecipe);

let allSelectorsForDishes = document.querySelectorAll('.addAllDishes');
    allSelectorsForDishes.forEach(function (value) {
        for (let i = 0; i <recipeName.length ; i++) {
            let nameOfDish = recipeName[i].title;
            let newOption = document.createElement("option");
            newOption.value = i+1;
            newOption.innerText = nameOfDish;

            value.appendChild(newOption);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    let addNewPlanBtn = document.querySelector('#addNewPlan');
    let nameOfPlan = document.querySelector('#nameOfPlan');
    let descriptionOfPlan = document.querySelector('#descriptionOfPlan');
    let numberOfWeek = document.querySelector('#numberofWeek');
    let monday = document.querySelectorAll('.monday');
    let tuesday = document.querySelectorAll('.tuesday');
    let wednesday = document.querySelectorAll('.wednesday');
    let thursday = document.querySelectorAll('.thursday');
    let friday = document.querySelectorAll('.friday');
    let saturday = document.querySelectorAll('.saturday');
    let sunday = document.querySelectorAll('.sunday');


    let newPlan = {
        PlanName: '',
        PlanDescription: '',
        PlanWeekNumber: '',
        firstDay: [],
        secondDay: [],
        thirdDay: [],
        fourthDay: [],
        fifthDay:[],
        sixthDay:[],
        seventhDay:[],
    };

    function saveaddPlanToLocalStorage(object){
        let dataFromLocalStorage = [];
        if(localStorage.Plan!=null){
            dataFromLocalStorage = JSON.parse(localStorage.addPlan);
            dataFromLocalStorage.push(object);
            localStorage.setItem("addPlan", JSON.stringify(dataFromLocalStorage));
        }else{
            dataFromLocalStorage.push(object);
            localStorage.setItem("addPlan", JSON.stringify(dataFromLocalStorage));
        }
        alert("Plan zapisany do localStorage");
    }


    addNewPlanBtn.addEventListener('click', function () {
        newPlan.PlanName = nameOfPlan.value;
        newPlan.PlanDescription = descriptionOfPlan.value;
        newPlan.PlanWeekNumber = numberOfWeek.value;
        for (let i = 0; i <monday.length ; i++) {
            newPlan.firstDay.push(monday[i].options[monday[i].selectedIndex].text)
        }
        for (let i = 0; i <tuesday.length ; i++) {
            newPlan.secondDay.push(tuesday[i].options[tuesday[i].selectedIndex].text)
        }
        for (let i = 0; i <wednesday.length ; i++) {
            newPlan.thirdDay.push(wednesday[i].options[wednesday[i].selectedIndex].text)
        }
        for (let i = 0; i <thursday.length ; i++) {
            newPlan.fourthDay.push(thursday[i].options[thursday[i].selectedIndex].text)
        }
        for (let i = 0; i <friday.length ; i++) {
            newPlan.fifthDay.push(friday[i].options[friday[i].selectedIndex].text)
        }
        for (let i = 0; i <saturday.length ; i++) {
            newPlan.sixthDay.push(saturday[i].options[saturday[i].selectedIndex].text)
        }
        for (let i = 0; i <sunday.length ; i++) {
            newPlan.seventhDay.push(sunday[i].options[sunday[i].selectedIndex].text)
        }

        saveaddPlanToLocalStorage(newPlan);
        console.log(newPlan);
    })


});




// newPlan.firstWeek =test.options[test.selectedIndex].text;