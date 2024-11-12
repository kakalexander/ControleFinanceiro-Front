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

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    from(this.authService.login(this.email, this.password)).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        alert('Login falhou!');
      }
    );
  }
}
