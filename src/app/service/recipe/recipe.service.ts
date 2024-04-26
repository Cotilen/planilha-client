import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe, RecipeArray } from './recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:8080/recipe'

  getRecipes(id: number): Observable<RecipeArray>{
    return this.http.get<RecipeArray>(this.url + "/user/" + id)
  }
}
