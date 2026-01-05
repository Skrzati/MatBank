import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  loginData = {
    clientId: '',
    password: ''
  };

  constructor(private api: ApiService) {}

  onLogin() {
    console.log('Logowanie do MatBank:', this.loginData);
    this.api.login(this.loginData).subscribe({
      next: (res) => {
        alert('Witaj w MatBank!');
        window.location.href = '/dashboard';
      },
      error: (err) => alert('Błąd logowania. Sprawdź Nr Klienta lub hasło.')
    });
  }
}