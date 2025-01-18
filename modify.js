// let car = ['BMW' , 'GOLF' , 'DACIA'];
// let color = ['red' , 'blue' , 'green'];
// let models = [2020 , 2022 , 2023 , 2024];

// for(let i =0 ; i<car.length ; i++){
//    if(car[i]=='DACIA'){
//     break;
//    }
//    console.log(car[i]);
   
// }

// for(let j = 0 ; j<color.length ; j++){
//     if(color[j]=='blue'){
//         break;
//     }
//     console.log(color[j]);
// }

// for (let k=0;k<models.length;k++){
//     if(models[k]==2022){
//         break;
//     }
//     console.log(models[k]);
    
// }

// function addNum(num1 , num2){

//     return num1 + num2;
// }
// let x = addNum(100,2);
// console.log(x/2);

// function calculAge(age){

//     let day = age * 365;
//     return day;
// }
// let day = calculAge(1);
// console.log(day+' days');


// function hour(day){
//     let hours = 24 * day;
//     return hours;
// }
// let hours = hour(day)
// console.log(hours);

let nouveauTitre = document.getElementById('title')
let Categorie = document.getElementById('Catégorie')
let nouveauTemps = document.getElementById('nouveau Temps_de_préparation')
let nouveauPreparation = document.getElementById('nouveau préparation')
let nouveauIngredients = document.getElementById('nouveau Ingredients')
let nouvelleImage = document.getElementById('ajouter une nouvelle image')

function updateRecipe(){

    titre.value = arr[i].title;
    Temps.value = arr[i].Temps;
    Preparation.value = arr[i].Preparation;
    Ingredients.value = arr[i].Ingredients;   
}