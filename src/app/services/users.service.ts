import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private usersApi = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any>(this.usersApi)
      .pipe(map(response => response.results));
  }
}
