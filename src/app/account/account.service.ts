import { Injectable } from '@angular/core';

import { ApiService } from 'src/app/shared';
import { User } from './account.models';

@Injectable() // 在account module中注册
export class AccountService {

  constructor(
    private api: ApiService,
  ) { }

  login(user: User) {
    console.log('kkkkk');
    return this.api.post('/users/login', user);
  }
}
