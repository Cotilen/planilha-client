import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FixedRecipe, FixedRecipeArray } from './fixedRecipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixedrecipeService {

  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:8080/fixedrecipe'

  getRecipes(id: number): Observable<FixedRecipeArray>{
    return this.http.get<FixedRecipeArray>(this.url + "/user/" + id)
  }

  postRecipe(recipe: FixedRecipe): Observable<FixedRecipe>{
    return this.http.post<FixedRecipe>(this.url, recipe)
  }
}
