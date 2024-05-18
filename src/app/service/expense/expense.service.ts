import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense, ExpenseArray, OneExpense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:8080/expense'

  getExpenses(id: number): Observable<ExpenseArray>{
    return this.http.get<ExpenseArray>(this.url + "/user/" + id)
  }

  postExpenses(expense: Expense): Observable<Expense>{
    return this.http.post<Expense>(this.url, expense)
  }

  getOneExpense(id: number): Observable<OneExpense>{
    return this.http.get<OneExpense>(this.url + "/" + id)
  }

  deleteExpense(id: number): Observable<OneExpense>{
    return this.http.delete<OneExpense>(this.url + "/" + id)
  }

  patchExpense(id: number, expense: Expense): Observable<Expense>{
    return this.http.patch<Expense>(this.url + "/" + id, expense)
  }
}
