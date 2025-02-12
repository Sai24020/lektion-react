import { Recipes } from "./interfaces";

const API_ENDPOINT = "https://dummyjson.com/recipes"
export const fetchRecipe = async () => {
    const res = await fetch(API_ENDPOINT);
    const data: Recipes = await res.json();
    return data
}