import React, { useState } from "react";
import FormIngredient from "./FormIngredient"
import Ingredient from "./Ingredient"

function AllIngredients(){

    const [ingredients, setIngredients] = useState([]);

    let cantIng = 0;

    const addIngredient = ingredient => {
        console.log(ingredient);
        if (ingredient.text.trim()){
            ingredient.text = ingredient.text.trim();
            const updatedIngredients = [ingredient, ...ingredients];
            setIngredients(updatedIngredients);
            cantIng = updatedIngredients.length;
            console.log(cantIng);
            
        }
    }

    const dropIngredient = id => {
        const updatedIngredients = ingredients.filter(ingredient => ingredient.id !== id);
        setIngredients(updatedIngredients);
        console.log("Ingredient delete!")
    }

    return (
        <>
        <FormIngredient onSubmit={addIngredient}/>
        <h3>Your ingrediens 🍚 🥩 🧅 🧅</h3>
        <div className="list-all-ingredients-inseted">
            <div className="cant-ingredient">
                Llevas {cantIng} ingrediente(s).
            </div>
            <p>
            {
                ingredients.map((ingredient) =>
                    <Ingredient
                        key={ingredient.id}
                        id={ingredient.id}
                        text={ingredient.text}
                        dropIngredient={dropIngredient}
                    />
                )
            }
            </p>
        </div>
        </>

    );
}

export default AllIngredients