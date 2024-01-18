import { Component } from '@angular/core';
import { User } from '../../types/types';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss'],
})
export class SavedUsersComponent {
  savedUsers: User[] = JSON.parse(localStorage.getItem('savedUsers') || '[]') as User[];

  onDelete(index: number): void {
    this.savedUsers.splice(index, 1);
    localStorage.setItem('savedUsers', JSON.stringify(this.savedUsers));
  }

}

console.log('savedUsers');
