
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IRandomUsers } from 'src/app/models/random-users';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {

   private baseURL = 'https://random-data-api.com';
  
   constructor(private http: HttpClient) { }

   getRandomUsers(): Observable<IRandomUsers> {
    const URL = `${this.baseURL}/api/users/random_user?size=10`;
    return this.http.get<IRandomUsers>(URL);
   }
}