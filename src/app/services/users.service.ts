import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, UserAdapter } from '../models/user.model';

@Injectable({

  providedIn: 'root'

})

export class UsersService {

  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient, private adpater: UserAdapter) { }

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.usersUrl).pipe(

      map((data: any[]) => data.map(item => this.adpater.adapt(item)))

    );

  }

}
