import { NgModule } from '@angular/core';
import { UserCardModule } from '../user-card/user-card.module';
import { SavedUsersComponent } from './saved-users.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SavedUsersComponent],
  imports: [UserCardModule, CommonModule],
  exports: [SavedUsersComponent],
})
export class SavedUsersModule {
}
