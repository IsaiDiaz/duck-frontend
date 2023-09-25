import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Duck }  from '../models/duck';
import { DucksRepository } from '../state/ducks.repository';
import { tap } from 'rxjs';
import { trackRequestResult } from '@ngneat/elf-requests';
import { Paginator } from '../models/paginator';
import { Delete } from '../models/delete';

@Injectable({
  providedIn: 'root'
})
export class DuckService {

  httpClient = inject(HttpClient);
  ducksRepo = inject(DucksRepository);

  private apiBackend = 'http://localhost:8081/api/v1';

  constructor() { }

  getDuck(): Observable <Duck>{
    return this.httpClient.get<Duck>(`${this.apiBackend}/imagen`);
  }

  getDucks(page:number, size: number){
    return this.httpClient.get<Paginator<Duck>>(`${this.apiBackend}/imagenes?page=${page}&size=${size}`)
    .pipe(
      tap((response)=>
        this.ducksRepo.setDucks(response),
      ),
      trackRequestResult(['DUCKS'], {skipCache: false})
    );
  }

  deleteDuck(id: number): Observable<String>{
    return this.httpClient.delete(`${this.apiBackend}/imagen/${id}`, {responseType: 'text'});
  }

  updateDuck(id: number, duck: Duck): Observable <Duck>{
    return this.httpClient.put<Duck>(`${this.apiBackend}/imagen/${id}`, duck);
  }

  getRandomDuck() : Observable<Duck>{
    return this.httpClient.get<Duck>(`${this.apiBackend}/imagenRandom`);
  }

  postDuck(duck: Duck) : Observable<String>{
    return this.httpClient.post<string>(`${this.apiBackend}/imagen`, duck);
  }
}
