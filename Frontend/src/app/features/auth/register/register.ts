import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  // Model danych dokładnie taki, jakiego potrzebuje Twój backend
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

  onRegister() {
    console.log('Wysyłanie danych rejestracji do MatBank API:', this.regData);
    this.api.register(this.regData).subscribe({
      next: (res) => {
        alert('Konto utworzone! Sprawdź e-mail w celu odebrania Numeru Klienta.');
        // Tutaj można dodać przekierowanie do logowania
      },
      error: (err) => alert('Błąd rejestracji. Upewnij się, że backend działa!')
    });
  }
}