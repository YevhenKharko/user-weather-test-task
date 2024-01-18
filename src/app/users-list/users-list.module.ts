import { NgModule } from '@angular/core';
import { UserCardModule } from '../user-card/user-card.module';
import { UsersListComponent } from './users-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersListComponent],
  imports: [UserCardModule, CommonModule],
  exports: [UsersListComponent],
})
export class UsersListModule {}
