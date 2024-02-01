import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5030/api/Account'; // Adjusted to include '/Account'

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login?email=${email}&password=${password}`;

    return this.http.post(url,null);
  }

  register(username: string, email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/register`;
    const body = { username, email, password };
    return this.http.post<any>(url, body);
  }

  // Additional methods like logout, getToken, etc. can be added here
}
