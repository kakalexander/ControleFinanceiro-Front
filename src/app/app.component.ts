// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  isAuthenticated: boolean = false;
  showSidebar: boolean = true; // Adicionando a propriedade showSidebar

  constructor(private authService: AuthService, private router: Router) {
    this.isAuthenticated = this.authService.isAuthenticated();
    
    // Verifica as mudanças na rota
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica se a URL contém '/login' ou '/register'
        this.showSidebar = !(event.url.includes('/login') || event.url.includes('/register'));
      }
    });
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  // Método para deslogar o usuário
  onLogout(): void {
    this.authService.logout();  // Chama o método de logout no AuthService
    this.isAuthenticated = false;  // Atualiza o estado de autenticação
    this.router.navigate(['/login']);  // Redireciona para a tela de login
  }
}