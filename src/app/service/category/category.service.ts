import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryArray } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:8080/category'

  getOneCategory(id: number): Observable<CategoryArray>{
    return this.http.get<CategoryArray>(this.url + id)
  }

  getCategory(): Observable<CategoryArray>{
    return this.http.get<CategoryArray>(this.url)
  }
}
