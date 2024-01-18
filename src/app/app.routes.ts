import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SavedUsersComponent } from './saved-users/saved-users.component';
import { UsersListComponent } from './users-list/users-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: UsersListComponent },
  { path: 'saved-users', component: SavedUsersComponent },
];
