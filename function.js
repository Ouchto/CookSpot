// Sélecteurs
const recipeForm = document.getElementById("recipeForm");
const recipeList = document.getElementById("recipeList");

// Fonction : Charger les recettes depuis localStorage
function loadRecipes() {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    if (recipes.length > 0 && recipeList) {
        renderRecipes(recipes);
    } else if (recipeList) {
        recipeList.innerHTML = "<p>Aucune recette disponible.</p>";
    }
}

// Fonction : Afficher les recettes
function renderRecipes(recipes) {
    recipeList.innerHTML = recipes.map((recipe) => `
        <div class="col-md-4">
            <div class="card">
                <img src="${recipe.image}" alt="${recipe.nom}" class="card-img-top recipe-image">
                <div class="card-body">
                    <h5 class="card-title">${recipe.nom}</h5>
                </div>
            </div>
        </div>
    `).join("");
}

// Fonction : Ajouter une nouvelle recette
function addRecipe(event) {
    event.preventDefault();

    const nom = document.getElementById("Nom").value.trim();
    const categorie = document.getElementById("Categorie").value.trim();
    const temps = document.getElementById("temps").value.trim();
    const preparation = document.getElementById("preparation").value.trim();
    const img = document.getElementById("img");
    const ingredients = document.getElementById("ingredients").value.trim();

    // Vérification de l'image
    if (!img.files[0]) {
        alert("Veuillez ajouter une image.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const image = event.target.result;

        const newRecipe = {
            nom,
            categorie,
            temps,
            ingredients,
            preparation,
            image,
        };

        // Récupérer les recettes existantes et ajouter la nouvelle
        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(newRecipe);

        // Sauvegarder les recettes dans localStorage
        localStorage.setItem("recipes", JSON.stringify(recipes));

        // Réinitialiser le formulaire et informer l'utilisateur
        if (recipeForm) recipeForm.reset();
        alert("Recette ajoutée avec succès !");
        window.location.href = "page_acceuil.html"; // Redirection vers l'accueil
    };

    reader.readAsDataURL(img.files[0]);
}

// Événement : Charger les recettes sur la page d'accueil
if (recipeList) {
    document.addEventListener("DOMContentLoaded", loadRecipes);
}

// Événement : Ajouter une recette via le formulaire
if (recipeForm) {
    recipeForm.addEventListener("submit", addRecipe);
}





