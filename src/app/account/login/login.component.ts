import {
  Component,
  OnInit,
  HostBinding,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  FormControl,
  FormArray,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

import { AccountService } from '../account.service';
import { User } from '../account.models';

interface Http {
  username: string;
  password: string;
}

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @HostBinding('class.login') hostClass = true;

  @ViewChild('password', { static: true }) password: FormControl;

  hide = true;
   markdown = `## Markdown __rulez__!
    ---

    ### Syntax highlight
    \`\`\`typescript
    const language = 'typescript';
    \`\`\`

    ### Lists
    1. Ordered list
    2. Another bullet point
      - Unordered list
      - Another unordered bullet point

    ### Blockquote
    > Blockquote to the max`;

  // profileForm = new FormGroup({
  //   username: new FormControl('jlq'),
  //   password: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });

  profileForm = this.fb.group({
    username: ['kk', Validators.required],
    password: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control(''),
    ]),
  });

  httpResult: Http;

  user = new User;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
  ) { }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  getErrorMessage() {
    return this.password.hasError('required') ? '需要填写密码' :
      this.password.hasError('password.invalid') ? '密码格式不正确' : '';
  }

  changed() {
    console.log(this.user);
  }

  updateName() {
    // this.name.setValue('fxxk');
  }

  onSubmit() {
    this.httpResult = {
      username: this.profileForm.value.username,
      password: this.profileForm.value.password,
    };
    this.user = {
      username: this.profileForm.value.username,
      password: this.profileForm.value.password,
    };
    // console.log(this.profileForm.value);
    // console.log(this.user);
    // this.accountService.login({username:'jlq', password: 'kkkk'});
    this.accountService.login(this.user)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['./']);
    });
  }

}
