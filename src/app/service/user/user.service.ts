import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { User, UserArray, UserData } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  private readonly url = 'http://localhost:8080/user/'

  create(user: User): Observable<User> {
    return this.http.post<User>(this.url, user)
    }

  login(user: UserArray): Observable<UserArray>{
    return this.http.post<UserArray>(this.url + 'login', user)

  }

  getDataDashboard(id: number, date: number): Observable<UserData>{
    return this.http.get<UserData>(this.url + id + '/data/' + date)
  }

  getDataGrafico(id: number, year: number): Observable<UserData>{
    return this.http.get<UserData>(this.url + 'data?year=' + year + '&user=' + id)
  }
}
