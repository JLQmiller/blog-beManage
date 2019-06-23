import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { observable, throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as path from 'path-browserify';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  private header = {
    'Accept': 'application/json, text/plain, */*', // RequestHeader告知Server希望接收的数据类型 任意类型的MIME类型
    'Content-Type': 'application/json; charset=UTF-8', // 发送端发送的数据类型
  };

  // 拼凑url字符串
  makeUrl(url) {
    return path.join(environment.apiUrl, url);
  }

  // 构造请求头
  private get headers(): HttpHeaders {
    return new HttpHeaders(this.header);
  }

  // 处理错误信息
  formatErrors(responseError: HttpErrorResponse) {
    console.log(responseError);
    let data;
    if (typeof responseError.error === 'string') {
      try {
        data = JSON.parse(responseError.error);
      } catch (err) {
        console.error('Fail to parse error', responseError.error);
        data = {error: 'fail to parse'};
      }
    } else {
      data = responseError.error;
    }
    return observableThrowError(data);
  }

  post(url: string, body: Object = {}): Observable<any> {
    return this.http.post(
      this.makeUrl(url),
      JSON.stringify(body),
      {headers: this.headers},
    ).pipe(
      catchError(this.formatErrors),
    );
  }


}
