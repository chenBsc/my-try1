class DishRecipe{
    constructor(id,name,ingredients,time,cookingMethod,image){
        this.id=id;
        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.cookingMethod = cookingMethod;
        this.image = image;
    }
        getTotalCalories=()=>
        {
            let CalCounter=0;
            this.ingredients.forEach(element =>CalCounter+=element.calories);
            return CalCounter;
        }

        getIngredients=()=>
        { 
            return this.ingredients;
        }
    }
    export {DishRecipe};

    