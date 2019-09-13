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
    window.location.assign('../addNewPlan.html')

});



// ==============  alert przepisy ==============

// zliczanie liczby przepisow
if(localStorage.recipes!=null) {
    let dataFromLocalStorage=[];
    dataFromLocalStorage = JSON.parse(localStorage.recipes);

    let numberOfRecipes = document.querySelector("#numberOfRecipes");

    numberOfRecipes.innerText = dataFromLocalStorage.length;
}

// zamykanie okna przepisw
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




if(localStorage.addPlan!=null) {
    dataFromLocalStorage = JSON.parse(localStorage.addPlan);

    


    for (let i = 0; i < dataFromLocalStorage.length; i++) {

        let numberOfWeek = document.querySelector("#number-of-week");
        numberOfWeek.innerText = dataFromLocalStorage[i].PlanWeekNumber;

        let table = document.querySelector(".main-app-table-plan");

        let monday = table.querySelectorAll("td:first-child");
        let tableMonday = [];
        monday.forEach(function (oneMeal) {
            tableMonday.push(oneMeal);
        });
        for (let j = 0; j < tableMonday.length; j++) {
            tableMonday[j].innerText = dataFromLocalStorage[i].firstDay[j]
        }


        let tuesday = table.querySelectorAll("td:nth-child(2)");
        let tableTuesday = [];
        tuesday.forEach(function (oneMeal) {
            tableTuesday.push(oneMeal);
        });
        for (let j = 0; j < tableTuesday.length; j++) {
            tableTuesday[j].innerText = dataFromLocalStorage[i].secondDay[j]
        }


        let wednesday = table.querySelectorAll("td:nth-child(3)");
        let tableWednesday = [];
        wednesday.forEach(function (oneMeal) {
            tableWednesday.push(oneMeal);
        });
        for (let j = 0; j < tableWednesday.length; j++) {
            tableWednesday[j].innerText = dataFromLocalStorage[i].thirdDay[j]
        }

        let thursday = table.querySelectorAll("td:nth-child(4)");
        let tableThursday = [];
        thursday.forEach(function (oneMeal) {
            tableThursday.push(oneMeal);
        });
        for (let j = 0; j < tableThursday.length; j++) {
            tableThursday[j].innerText = dataFromLocalStorage[i].fourthDay[j]
        }

        let friday = table.querySelectorAll("td:nth-child(5)");
        let tableFriday = [];
        friday.forEach(function (oneMeal) {
            tableFriday.push(oneMeal);
        });
        for (let j = 0; j < tableFriday.length; j++) {
            tableFriday[j].innerText = dataFromLocalStorage[i].fifthDay[j]
        }


        let saturday = table.querySelectorAll("td:nth-child(6)");
        let tableSaturday = [];
        saturday.forEach(function (oneMeal) {
            tableSaturday.push(oneMeal);
        });
        for (let j = 0; j < tableSaturday.length; j++) {
            tableSaturday[j].innerText = dataFromLocalStorage[i].sixthDay[j]
        }


        let sunday = table.querySelectorAll("td:nth-child(7)");
        let tableSunday = [];
        sunday.forEach(function (oneMeal) {
            tableSunday.push(oneMeal);
        });
        for (let j = 0; j < tableSunday.length; j++) {
            tableSunday[j].innerText = dataFromLocalStorage[i].seventhDay[j]
        }

    }


}










