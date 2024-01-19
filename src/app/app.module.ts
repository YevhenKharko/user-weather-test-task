import { NgModule } from '@angular/core';
import { UserCardModule } from './user-card/user-card.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, UserCardModule, HttpClientModule],
})
export class AppModule {}
