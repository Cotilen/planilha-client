export interface User{
  id?: number,
  name?: string,
  email?: string,
  password?: string,
}

export interface UserArray{
  user: User
}

export interface UserData{
  recipe: UserRecipe[],
  fixedrecipe: UserFixedRecipe[],
  expense: UserFixedExpense[],
  fixedexpense: UserFixedExpense[],
  saldo: number
}

export interface UserRecipe{
  id: number,
  name: string,
  value: number,
  data: string,
}

export interface UserFixedRecipe{
  id: number,
  name: string,
  value: number,
}

export interface UserExpense{
  id: number,
  name: string,
  value: number,
  data: string,
}

export interface UserFixedExpense{
  id: number
  name: string
  value: number
}
