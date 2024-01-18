import { Component, Input } from '@angular/core';
import { User, Weather, WeatherInfo } from '../../types';
import { weatherInfoMap } from '../../data/weatherInfoMap';
import { forkJoin } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  constructor(
    private userService: UsersService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this.userService.getData().subscribe((users) => {
      this.users = users;

      const weatherRequests = users.map(user =>
        this.weatherService.getWeather(user.location.coordinates.latitude, user.location.coordinates.longitude)
      );

      forkJoin(weatherRequests).subscribe((weathers: Weather[]) => {
        this.users.forEach((user, index) => {
          user.weather = weathers[index];
          if (user.weather.hourly && user.weather.hourly.temperature_2m) {
            user.minTemperature = Math.min(...user.weather.hourly.temperature_2m);
            user.maxTemperature = Math.max(...user.weather.hourly.temperature_2m);
          }
        });
      });

      this.isLoading = false;
    });

    this.savedUsers = JSON.parse(
      localStorage.getItem('savedUsers') || '[]'
    ) as User[];
  }

  getWeatherInfo(weatherCode: number): WeatherInfo {
    return weatherInfoMap[weatherCode] || { icon: '❓', description: 'Unknown' };
  }

  users: User[] = [];
  savedUsers: User[] = [];
  isLoading = false;
}

