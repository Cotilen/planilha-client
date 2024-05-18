export interface Expense {
  id?: number,
  name?: string,
  description?: string,
  value?: number,
  dateExpense: string,
  id_category?: number
}

export interface ExpenseArray {
  expense: Expense[]
}

export interface OneExpense {
  expense: Expense
}
