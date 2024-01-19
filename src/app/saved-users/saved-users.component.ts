import { Component, Output, EventEmitter, Input, OnChanges, DoCheck } from '@angular/core';
import { User } from '../../types/types';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss'],
})
export class SavedUsersComponent implements DoCheck {
  @Input() savedUsers: User[] = [];

  @Output() userDeleted = new EventEmitter<number>();

  ngDoCheck(): void {
    const savedUsersFromLocalStorage = JSON.parse(localStorage.getItem('savedUsers') || '[]') as User[];
    if (this.savedUsers !== savedUsersFromLocalStorage) {
      this.savedUsers = savedUsersFromLocalStorage;
    }
  }

  onDelete(index: number): void {
    this.userDeleted.emit(index);
  }

  onClear(): void {
    localStorage.clear();
    this.savedUsers = [];
  }
}
