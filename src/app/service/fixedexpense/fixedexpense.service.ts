import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FixedExpenseArray } from './fixedexpense';

@Injectable({
  providedIn: 'root'
})
export class FixedexpenseService {

  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:8080/fixedexpense'

  getExpenses(id: number): Observable<FixedExpenseArray>{
    return this.http.get<FixedExpenseArray>(this.url + "/user/" + id)
  }
}
