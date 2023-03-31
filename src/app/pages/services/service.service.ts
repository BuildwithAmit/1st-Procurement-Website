import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = environment.api_url;

  constructor(private http: HttpClient) { }

  setSubscribed(data:any) {
    return this.http.post(`${this.apiUrl}/newsletter`, data);
  }
  setReqRawMatrial(data:any) {
    return this.http.post(`${this.apiUrl}/rawmetarial`, data);
  }
  contactUs(data:any) {
    return this.http.post(`${this.apiUrl}/contactus`, data);
  }
  setReqPartner(data:any) {
    return this.http.post(`${this.apiUrl}/partner`, data);
  }
  joinBeta(data:any) {
    return this.http.post(`${this.apiUrl}/beta`, data);
  }

}
