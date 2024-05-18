import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FixedExpense, FixedExpenseArray, OneExpense } from './fixedexpense';

@Injectable({
  providedIn: 'root'
})
export class FixedexpenseService {

  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:8080/fixedexpense'

  getExpenses(id: number): Observable<FixedExpenseArray>{
    return this.http.get<FixedExpenseArray>(this.url + "/user/" + id)
  }

  postExpenses(expense: FixedExpense): Observable<FixedExpense>{
    return this.http.post<FixedExpense>(this.url, expense)
  }

  getOneExpense(id: number): Observable<OneExpense>{
    return this.http.get<OneExpense>(this.url + "/" + id)
  }

  deleteExpense(id: number): Observable<OneExpense>{
    return this.http.delete<OneExpense>(this.url + "/" + id)
  }

  patchExpense(id: number, expense: FixedExpense): Observable<FixedExpense>{
    return this.http.patch<FixedExpense>(this.url + "/" + id, expense)
  }
}
