export interface FixedExpense {
  id?: number,
  name?: string,
  description?: string,
  value?: number,
  dateExpense: string,
  id_category?: number
}

export interface FixedExpenseArray {
  expense: FixedExpense[]
}
