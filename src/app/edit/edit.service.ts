import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(
    private http: HttpClient,
  ) { }

  createArticle() {
    // this.http.post()
  }
}
