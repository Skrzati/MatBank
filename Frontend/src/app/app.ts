import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // Usunięto RouterLinkActive
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // Usunąłem RouterLinkActive z tej listy poniżej:
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'MatBank';

  runDebug() {
    console.warn('⚠️ DEBUG MODE: Przekierowanie na dashboard...');
    window.location.href = '/dashboard'; 
  }
}