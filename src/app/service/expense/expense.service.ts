import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseArray } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:8080/expense'

  getExpenses(id: number): Observable<ExpenseArray>{
    return this.http.get<ExpenseArray>(this.url + "/user/" + id)
  }
}
