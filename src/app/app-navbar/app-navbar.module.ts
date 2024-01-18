import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from './app-navbar.component';

@NgModule({
  declarations: [AppNavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppNavbarComponent],
})
export class AppNavbarModule {}
