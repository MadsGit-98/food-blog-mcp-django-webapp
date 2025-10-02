tailwind.config = {
    theme: {
        extend: {
            colors: {
                'draft-yellow': '#FBBF24', // Tailwind's amber-400 for drafts
            }
        }
    }
}


// Initialization function to check post type on load
document.addEventListener('DOMContentLoaded', (event) => {
    const isRecipe = "{% if post and post.is_recipe %}true{% else %}false{% endif %}";
    if (isRecipe === 'true') {
        document.getElementById('type-recipe').checked = true;
    }
    toggleRecipeFields(); 
    feather.replace(); // Run after DOM load
});


/**
 * Toggles the visibility of the Recipe-specific ingredient fields.
 */
function toggleRecipeFields() {
    const recipeFields = document.getElementById('recipe-fields');
    const isRecipe = document.getElementById('type-recipe').checked;

    if (isRecipe) {
        recipeFields.style.display = 'block';
    } else {
        recipeFields.style.display = 'none';
    }
    feather.replace();
}

/**
 * Adds a new row for entering ingredient details.
 */
function addIngredientRow() {
    const container = document.getElementById('ingredients-container');
    const newRow = document.createElement('div');
    newRow.className = 'flex gap-3 items-center ingredient-row';
    newRow.innerHTML = `
        <input type="text" name="quantity" placeholder="Quantity" class="w-1/4 px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500">
        <input type="text" name="unit" placeholder="Unit" class="w-1/4 px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500">
        <input type="text" name="name" placeholder="Ingredient Name" class="flex-grow px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500">
        <button type="button" onclick="removeIngredient(this)" class="text-red-500 hover:text-red-700 p-2 rounded-full transition"><i data-feather="x" class="h-5 w-5"></i></button>
    `;
    container.appendChild(newRow);
    feather.replace(); // Replace icons in the new row
}

/**
 * Removes an ingredient row from the DOM.
 */
function removeIngredient(button) {
    const row = button.closest('.ingredient-row');
    if (row) {
        row.remove();
    }
}


AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
feather.replace();
