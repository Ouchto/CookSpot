
const recipeForm = document.getElementById("recipeForm");
const recipeList = document.getElementById("recipeList");


function loadRecipes() {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    if (recipes.length > 0 && recipeList) {
        renderRecipes(recipes);
    } else if (recipeList) {
        recipeList.innerHTML = "<p>Aucune recette disponible.</p>";
    }
}


function renderRecipes(recipes) {
    recipeList.innerHTML = recipes.map((recipe) => `
            <div style="width: 100%; max-width: 300px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; background-color: #fff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
    <!-- Image -->
  <a href="detail.html"><img src="${recipe.image}" alt="${recipe.nom}" style="width: 100%; height: 200px; border-radius: 8px 8px 0 0; object-fit: cover;"></a>  
  
    <h5 style="font-size: 1.2rem; font-weight: bold; margin: 15px 0; color: #333;">${recipe.nom}</h5>
</div>

    `).join("");
}


function addRecipe(event) {
    event.preventDefault();

    const nom = document.getElementById("Nom").value.trim();
    const categorie = document.getElementById("Categorie").value.trim();
    const temps = document.getElementById("temps").value.trim();
    const preparation = document.getElementById("preparation").value.trim();
    const img = document.getElementById("img");
    const ingredients = document.getElementById("ingredients").value.trim();

    
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

        
        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(newRecipe);

       
        localStorage.setItem("recipes", JSON.stringify(recipes));

       
        if (recipeForm) recipeForm.reset();
        alert("Recette ajoutée avec succès !");
        window.location.href = "page_acceuil.html"; 
    };

    reader.readAsDataURL(img.files[0]);
}


if (recipeList) {
    document.addEventListener("DOMContentLoaded", loadRecipes);
}


if (recipeForm) {
    recipeForm.addEventListener("submit", addRecipe);
}
