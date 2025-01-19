
const recipeForm = document.getElementById("recipeForm");
const recipeList = document.getElementById("recipeList");
const recipeDetails = document.getElementById("recipeDetail");

function loadRecipes() {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    if (recipes.length > 0 && recipeList) {
        renderRecipes(recipes);
    } else if (recipeList) {
        recipeList.innerHTML = "<p>Aucune recette disponible.</p>";
    }
}





function renderRecipes(recipes) {
    recipeList.innerHTML = recipes.map((recipe, index) => `
        <div style="width: 100%; max-width: 300px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; background-color: #fff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
            <a href="detail.html" onclick="selectRecipe(${index})">
                <img src="${recipe.image}" alt="${recipe.nom}" style="width: 100%; height: 200px; border-radius: 8px 8px 0 0; object-fit: cover;">
            </a>
            <h5 style="font-size: 1.2rem; font-weight: bold; margin: 15px 0; color: #333;">${recipe.nom}</h5>
        </div>
    `).join("");
}

function selectRecipe(index) {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const selectedRecipe = recipes[index];
    localStorage.setItem("selectedRecipe", JSON.stringify(selectedRecipe));
}



document.addEventListener("DOMContentLoaded", function () {
    const recipeDetails = document.getElementById("recipeDetail");
    const selectedRecipe = JSON.parse(localStorage.getItem("selectedRecipe"));

    if (selectedRecipe && recipeDetails) {
        recipeDetails.innerHTML = `
            <div style="width: 100%; max-width: 700px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; background-color: #fff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
                <h5 style="font-size: 1.2rem; font-weight: bold; margin: 15px 0; color: #333;">${selectedRecipe.nom}</h5>
                <img src="${selectedRecipe.image}" alt="${selectedRecipe.nom}" style="width: 100%; height: 300px; border-radius: 8px 8px 0 0; object-fit: cover;">
                <p><strong>Category:</strong> ${selectedRecipe.categorie}</p>
                <p><strong>Preparation Time:</strong> ${selectedRecipe.temps} min</p>
                <h3>Ingredients:</h3>
                <ul>
                    ${selectedRecipe.ingredients.split(',').map(ing => `<li>${ing.trim()}</li>`).join('')}
                </ul>
                <h3>Preparation:</h3>
                <p>${selectedRecipe.preparation}</p>
                <button id="deleteRecipeButton" style="background-color: #f44336; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; margin: 20px 0;">Delete Recipe</button>
            </div>
        `;

        // Attach the delete functionality to the button
        const deleteButton = document.getElementById("deleteRecipeButton");
        deleteButton.addEventListener("click", function () {
            deleteRecipe(selectedRecipe.nom);
        });
    } else if (recipeDetails) {
        recipeDetails.innerHTML = `<p>No recipe selected.</p>`;
    }
});

// Function to delete the recipe
function deleteRecipe(recipeName) {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = recipes.filter(recipe => recipe.nom !== recipeName);

    if (updatedRecipes.length < recipes.length) {
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        alert(`Recipe "${recipeName}" has been deleted successfully.`);
        window.location.href = "page_acceuil.html"; // Redirect back to the main page
    } else {
        alert(`Recipe "${recipeName}" could not be found.`);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    localStorage.removeItem("selectedRecipe");
});



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

if (recipeDetails) {
    document.addEventListener("DOMContentLoaded", loadDetails);
}











  function delet(){
    dataPro.splice(0,1);
    localStorage.product =JSON.stringify(dataPro)
    showData()
  }



