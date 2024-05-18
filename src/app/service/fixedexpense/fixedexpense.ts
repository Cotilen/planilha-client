export interface FixedExpense {
  id?: number,
  name?: string,
  description?: string,
  value?: number,
  dateExpense: string,
  finalDate?: string
  id_category?: number
}

export interface OneExpense {
  expense: FixedExpense
}

export interface FixedExpenseArray {
  expense: FixedExpense[]
}
