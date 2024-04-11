import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:8080/user'

  create(user: User): Observable<User> {
    console.log(user);

    return this.http.post<User>(this.url, user)
    }

  login(user: User): Observable<User>{
    return this.http.post<User>(this.url + '/login', user)

  }
}
