export interface FixedRecipe {
  id?: number,
  name?: string,
  value?: string,
  dateRecipe: string,
  finalDate?: string,
}

export interface FixedRecipeArray {
  recipe: FixedRecipe[]
}
