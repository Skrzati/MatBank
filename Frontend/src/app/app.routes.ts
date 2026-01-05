import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { DashboardComponent } from './features/dashboard/dashboard';
import { HomeComponent } from './features/home/home'; // Importujemy Home

export const routes: Routes = [
  // Zmieniamy to: zamiast redirectTo 'login', dajemy component Home
  { path: '', component: HomeComponent }, 
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent }
];