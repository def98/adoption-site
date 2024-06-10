import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public toolbarOptions: string[] = [];

  constructor(private router: Router) {
    this.toolbarOptions = ['HOME', 'CATS', 'DOGS', 'CONTACT US'];
  }

  navigate(option: string) {
    switch (option) {
      case('HOME'):
        this.navigateHome();
        break;
      case('CATS'):
        this.navigateToCats();
        break;
      case('DOGS'):
        this.navigateToDogs();
        break;
      case('CONTACT US'):
        this.navigateToContact();
        break;
      default: {
        break;
      }
    }
  }

  navigateHome() {
    this.router.navigate(['']);
  }

  navigateToCats() {
    this.router.navigate(['/cats']);
  }

  navigateToDogs() {
    this.router.navigate(['/dogs']);
  }

  navigateToContact() {
    this.router.navigate(['/contact-us']);
  }
}
