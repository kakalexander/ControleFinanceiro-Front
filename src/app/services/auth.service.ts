import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users';

  login(email: string, password: string) {
    return axios.post(this.apiUrl + '/login', { email, password });
  }

  register(user: any) {
    return axios.post(this.apiUrl + '/register', user);
  }
}
