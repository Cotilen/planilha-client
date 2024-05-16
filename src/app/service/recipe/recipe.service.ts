import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneRecipe, Recipe, RecipeArray } from './recipe';
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

  postRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.url, recipe)
  }

  getOneRecipe(id: number): Observable<OneRecipe>{
    return this.http.get<OneRecipe>(this.url + "/" + id)
  }

  deleteRecipe(id: number): Observable<OneRecipe>{
    return this.http.delete<OneRecipe>(this.url + "/" + id)
  }

  patchRecipe(id: number, recipe: Recipe): Observable<Recipe>{
    return this.http.patch<Recipe>(this.url + "/" + id, recipe)
  }
}
