// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfessionalFormComponent } from './components/professional-form/professional-form.component';
import { LoginComponent } from './components/login/login.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { AuthGuard
  
 } from './services/guards/auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Protege o dashboard
  { path: 'professional-form', component: ProfessionalFormComponent, canActivate: [AuthGuard] }, // Protege o formulário profissional
  { path: 'monitoring', component: MonitoringComponent, canActivate: [AuthGuard] } // Protege o monitoramento
];
