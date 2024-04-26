export interface Recipe {
  id?: number,
  name?: string,
  value?: string,
  dateRecipe: string,
}

export interface RecipeArray {
  recipe: Recipe[]
}
