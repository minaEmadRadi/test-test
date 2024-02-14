import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://10.0.0.15:9097/api/User'; // Adjusted to include '/Account'

  constructor(private http: HttpClient) { }

  GetAllUsers(): Observable<HttpResponse<User[]>> {
    const url = `${this.apiUrl}`;
    return this.http.get<User[]>(url, { observe: 'response' }).pipe(
      tap(response => {
        console.log('Fetched Users:', response.body); // Log the response body
        console.log('Response Status:', response.status); // Log the response status
      })
    );
  }

  
}
