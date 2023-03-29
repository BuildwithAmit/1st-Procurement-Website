import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) { }

  getEndpoint1() {
    return this.http.get(`${this.apiUrl}/endpoint1`);
  }

  postEndpoint2(data:any) {
    return this.http.post(`${this.apiUrl}/endpoint2`, data);
  }
}
