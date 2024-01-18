import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
})
export class AppNavbarComponent {
  constructor(private router: Router) {}

  isMainRouteActive(): boolean {
    return this.router.isActive('/main', true);
  }

  isSavedUsersRouteActive(): boolean {
    return this.router.isActive('/saved-users', true);
  }
}
