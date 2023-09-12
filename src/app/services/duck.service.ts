import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Duck }  from '../models/duck';
import { Delete } from '../models/delete';

@Injectable({
  providedIn: 'root'
})
export class DuckService {

  private apiBackend = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  getDuck(): Observable <Duck>{
    return this.http.get<Duck>(`${this.apiBackend}/imagen`);
  }

  getDucks(): Observable <Duck[]>{
    return this.http.get<Duck[]>(`${this.apiBackend}/imagenes`);
  }

  DeleteDuck(id: number): Observable<String>{
    return this.http.delete(`${this.apiBackend}/imagen/${id}`, {responseType: 'text'});
  }

  UpdateDuck(id: number, duck: Duck): Observable <Duck>{
    return this.http.put<Duck>(`${this.apiBackend}/imagen/${id}`, duck);
  }
}
