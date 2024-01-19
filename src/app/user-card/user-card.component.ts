import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, WeatherInfo } from '../../types/types';
import { weatherInfoMap } from '../../data/weatherInfoMap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  constructor(private router: Router) {}

  @Input() user: User | undefined;
  @Input() index: number | undefined;
  @Input() savedUsers: User[] = [];

  isSavedUsersRoute = this.router.isActive('/saved-users', true);

  getWeatherInfo(weatherCode: number): WeatherInfo {
    return weatherInfoMap[weatherCode] || { icon: '❓', description: 'Unknown' };
  }

  isCurrentUserInList(): boolean {
    return this.savedUsers.some(
      savedUser => savedUser.id.value === this.user?.id.value
        && savedUser.email === this.user.email);
  }

  onClickSave(): void {
    if (this.user) {
      const savedUsers = JSON.parse(localStorage.getItem('savedUsers') || '[]') as User[];
      if (!savedUsers.find(savedUser => savedUser.id.value === this.user?.id.value && savedUser.email === this.user.email)) {
        savedUsers.push(this.user);
        localStorage.setItem('savedUsers', JSON.stringify(savedUsers));
        this.savedUsers = savedUsers;
      }
    }
  }

  onClickDelete(): void {
    if (this.user) {
      const savedUsers = JSON.parse(localStorage.getItem('savedUsers') || '[]') as User[];
      const userIndex = savedUsers.findIndex(savedUser => savedUser.id.value === this.user?.id.value);
      if (userIndex !== -1) {
        savedUsers.splice(userIndex, 1);
        localStorage.setItem('savedUsers', JSON.stringify(savedUsers));
      }
      this.savedUsers = savedUsers;
    }
  }
}
