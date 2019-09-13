let name = document.querySelector(".main-app-input-name");
name.innerText = localStorage.getItem("savedName");



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
        if(localStorage.addPlan!=null){
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
        for (let j = 0; j <tuesday.length ; j++) {
            newPlan.secondDay.push(tuesday[j].options[tuesday[j].selectedIndex].text)
        }
        for (let x = 0; x <wednesday.length ; x++) {
            newPlan.thirdDay.push(wednesday[x].options[wednesday[x].selectedIndex].text)
        }
        for (let y = 0; y <thursday.length ; y++) {
            newPlan.fourthDay.push(thursday[y].options[thursday[y].selectedIndex].text)
        }
        for (let z = 0; z <friday.length ; z++) {
            newPlan.fifthDay.push(friday[z].options[friday[z].selectedIndex].text)
        }
        for (let c = 0; c <saturday.length ; c++) {
            newPlan.sixthDay.push(saturday[c].options[saturday[c].selectedIndex].text)
        }
        for (let b = 0; b <sunday.length ; b++) {
            newPlan.seventhDay.push(sunday[b].options[sunday[b].selectedIndex].text)
        }



        if (nameOfPlan.value.length === 0  || nameOfPlan.value.length > 50) {
            nameOfPlan.style.border = 'solid red 1px';

            alert('Wypełnij pole "Nazwa planu" Pamiętaj, że musi mieć mniej niż 50 znaków')
        }
        else if (descriptionOfPlan.value.length === 0 || descriptionOfPlan.value.length > 360){
            descriptionOfPlan.style.border = 'solid red 1px';
            alert('Wypełnij pole "Opis Planu" Pamiętaj, że musi mieć mniej niż 360 znaków')
        }
        else if (Number(numberOfWeek.value) < 0 || Number(numberOfWeek.value) > 52){
            numberOfWeek.style.border = 'solid 1px red';
            console.log(numberOfWeek.value);
            alert('Wypełnij pole "Numer tygodnia" pamiętaj że ni możesz wpisać liczby ujemnej ani większej niż 52')
        }
        else {
            saveaddPlanToLocalStorage(newPlan);
            window.location.assign("../schedules.html");
        }

    });

    nameOfPlan.addEventListener('click', function () {
        nameOfPlan.style.display = 'inline-block';
        nameOfPlan.style.border = '1px $colorTablets solid'
    });
    descriptionOfPlan.addEventListener('click', function () {
        descriptionOfPlan.style.border = '1px $colorTablets solid'
    });
    numberOfWeek.addEventListener('click', function () {
        numberOfWeek.style.border = '$colorTablets solid 1px'
    });

});
