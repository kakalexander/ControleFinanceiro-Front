import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(response => {
        // Se o login for bem-sucedido, redireciona para o Dashboard
        this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        // Se ocorrer erro no login, mostra uma mensagem de erro
        this.loginError = 'Login falhou. Verifique as credenciais.';
      });
  }
}
