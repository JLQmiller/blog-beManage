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

import { } from '../../shared';
import { User } from '../login.model';

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

  user = new User('', '');

  constructor(
    private fb: FormBuilder
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
    console.log(this.profileForm.value);
    this.profileForm.patchValue({
      username: 'killer',
      address: {
        zip: '111',
      },
    });
  }

}
