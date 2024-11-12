// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfessionalFormComponent } from './components/professional-form/professional-form.component';
import { LoginComponent } from './components/login/login.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', 
    component: LoginComponent },
  { path: 'register', 
    component: RegisterComponent },
  { path: 'dashboard', 
    component: DashboardComponent },
  { path: 'professional-form', 
    component: ProfessionalFormComponent },
  { path: 'monitoring', 
    component: MonitoringComponent }
];
