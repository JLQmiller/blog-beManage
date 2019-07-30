import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutModule } from './layout';
import { AccountModule } from './account';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule, ApiInterceptor, AuthService } from './shared';
import { ParallaxDirective } from './parallax.directive';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    LayoutModule,
    AccountModule,
    SharedModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
      deps: [ AuthService ],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
