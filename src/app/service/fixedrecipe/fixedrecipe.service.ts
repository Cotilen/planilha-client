import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FixedRecipe, FixedRecipeArray, OneRecipeFixed } from './fixedRecipe';
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

  getOneRecipe(id: number): Observable<OneRecipeFixed>{
    return this.http.get<OneRecipeFixed>(this.url + "/" + id)
  }

  patchRecipe(id: number, recipe: FixedRecipe): Observable<FixedRecipe>{
    return this.http.patch<FixedRecipe>(this.url + "/" + id, recipe)
  }

  deleteRecipe(id: number): Observable<OneRecipeFixed>{
    return this.http.delete<OneRecipeFixed>(this.url + "/" + id)
  }
}
