import { Injectable } from '@angular/core';

import { ApiService } from 'app/shared';
import { User } from './account.models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: ApiService,
  ) { }

  login(user: User) {
    return this.http.post('login', user);
  }
}
