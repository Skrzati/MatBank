import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  isLoggedIn = false;
  
  // Model logowania zgodny z Twoimi wytycznymi
  loginData = {
    clientId: '',
    password: ''
  };

  // Model rejestracji zgodny z Twoimi wytycznymi
  regData = {
    firstName: '',
    lastName: '',
    pesel: '',
    phone: '',
    email: '',
    address: '',
    password: ''
  };

  constructor(private api: ApiService) {}

  onLogin() {
    console.log('Próba logowania:', this.loginData);
    this.api.login(this.loginData).subscribe({
      next: (res) => {
        alert('Zalogowano pomyślnie!');
        this.isLoggedIn = true;
      },
      error: (err) => alert('Błąd logowania. Uruchom backend!')
    });
  }

  onRegister() {
    console.log('Rejestracja nowego klienta:', this.regData);
    this.api.register(this.regData).subscribe({
      next: (res) => alert('Konto w MatBank zostało utworzone! Możesz się zalogować.'),
      error: (err) => alert('Błąd rejestracji. Sprawdź połączenie z serwerem.')
    });
  }

  // GUZIK DO DEBUGA - Wpuszcza bez sprawdzania hasła
  runDebug() {
    console.warn('⚠️ MODE DEBUG: Pominięto weryfikację backendową.');
    this.isLoggedIn = true;
  }
}