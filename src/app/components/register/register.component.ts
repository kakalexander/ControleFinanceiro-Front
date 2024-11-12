import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onRegister() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    try {
      const response = await this.authService.register(user);
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/login']);
    } catch (error) {
      alert('Erro ao cadastrar usuário!');
    }
  }
}
