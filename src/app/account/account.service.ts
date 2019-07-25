import { Injectable } from '@angular/core';

import { ApiService, AuthService } from 'src/app/shared';
import { User } from './account.models';

@Injectable()
export class AccountService {

  constructor(
    private api: ApiService,
    private authService: AuthService,
  ) { }

  login(user: User) {
    return this.api.post('/users/login', user);
  }
}
