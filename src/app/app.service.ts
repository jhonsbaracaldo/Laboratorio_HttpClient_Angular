import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from './models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  private apiUrl = 'http://tu-api.com';  

  constructor(private _http: HttpClient) {}

  obtenerRespuesta() {
    return this._http.get<Answer>(this.apiUrl);
  }
}
