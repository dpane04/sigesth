import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

interface myData {
  success: boolean,
  message: string
}

@Injectable({ 
  providedIn: 'root' 
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('localhost:8080/login', { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;

      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
