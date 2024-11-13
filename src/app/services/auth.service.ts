// auth.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  login(email: string, password: string) {
    return axios.post(this.apiUrl + '/login', { email, password })
      .then(response => {
        // Armazena o token no localStorage
        if (response.data && response.data.access_token) {
          localStorage.setItem('auth_token', response.data.access_token);
        }
        return response.data;
      })
      .catch(error => {
        console.error('Erro no login:', error);
        throw error;
      });
  }

  register(user: any) {
    return axios.post(this.apiUrl + '/register', user);
  }

  // Verifica se o usuário está autenticado
  isAuthenticated(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('auth_token');
      return !!token;
    }
    return false;
  }

  // Método para deslogar o usuário
  logout() {
    localStorage.removeItem('auth_token'); // Remova o token do localStorage
  }
}
  