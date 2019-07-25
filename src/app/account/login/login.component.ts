import {
  Component,
  OnInit,
  HostBinding,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { AuthService } from '../../shared';

import { Router, ActivatedRoute } from '@angular/router';

import { AccountService } from '../account.service';
import { NzMessageService } from 'ng-zorro-antd';

interface Http {
  username: string;
  password: string;
}

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @HostBinding('class.login') hostClass = true;

  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private message: NzMessageService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  setAuthServiceInfo(username: string, token: string) {
    this.authService.setAuth(username);
    this.authService.setToken(token);
  }

  login(): void {
    const user = {
      username: this.validateForm.value.username,
      password: this.validateForm.value.password,
    }

    this.accountService.login(user)
    .subscribe((loginStatus) => {
      if (loginStatus && loginStatus.success) {
        this.setAuthServiceInfo(loginStatus.username, loginStatus.token);
        this.router.navigate(['/edit']);
      } else if ( !loginStatus.success) {
        this.message.error('用户不存在');
      }
    }, (err) => {
      if (err.status === 401) {
        this.message.error('密码错误，请重试', {nzDuration: 3500, nzAnimate: true});
      }
    })
  }

}
