import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
    ) { }

  createUser(user: User){
    const path = 'https://bicicletas-api.herokuapp.com/register';
    return this.http.post(path, user);
  }

  getUser(user: User){
    const path2 = 'https://bicicletas-api.herokuapp.com/login';
    return this.http.post(path2, user);
  }
}
