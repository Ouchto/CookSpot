const tableau = [];



//-------------------------- Ajouter ---------------------------------

var nom = document.getElementById("Nom");
var categorie = document.getElementById("Categorie");
var temps = document.getElementById("temps");
var preparation = document.getElementById("preparation");
var img = document.getElementById("img");
var ingredients = document.getElementById("ingredients");
var submit = document.getElementById("btn_ajouter");

submit.onclick = function (){
    tableau.push({Nom : nom.value,
        categorie: categorie.value,
        temps_de_preparation: temps.value,
        preparation: preparation.value,
        image:img.value, 
        ingredients:ingredients.value});

        tableau.forEach(recette => console.log(recette));
}

//-------------------------------------------------------------------