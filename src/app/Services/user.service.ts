import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private apiUrl = 'http://10.0.0.15:9097/api/User'; // Adjusted to include '/Account'

  constructor(private http: HttpClient) {}

  GetAllUsers(): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(this.apiUrl, { observe: 'response' }).pipe(
      tap((response) => {
        console.log('Fetched Users:', response.body); // Log the response body
        console.log('Response Status:', response.status); // Log the response status
      })
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/GetUserById/${id}`);
  }

  attend(id:number):Observable<boolean>{
    return this.http.post<boolean>(`http://10.0.0.15:9097/api/TimeIn/${id}`,{});
  }
  leave(id:number):Observable<boolean>{
    return this.http.put<boolean>(`http://10.0.0.15:9097/api/TimeOut/${id}`,{});
  }
}
