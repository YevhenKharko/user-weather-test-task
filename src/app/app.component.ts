import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { UserCardModule } from './user-card/user-card.module';
import { AppNavbarModule } from './app-navbar/app-navbar.module';
import { SavedUsersModule } from './saved-users/saved-users.module';
import { WeatherService } from '../services/weather.service';
import { UsersService } from '../services/users.service';
import { weatherInfoMap } from '../data/weatherInfoMap';
import { User, Weather, WeatherInfo } from '../types';
import { forkJoin } from 'rxjs';
import { UsersListModule } from './users-list/users-list.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppModule,
    UserCardModule,
    AppNavbarModule,
    SavedUsersModule,
    UsersListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [UsersService, WeatherService],
})
export class AppComponent {
}
