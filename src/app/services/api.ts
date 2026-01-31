import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ApiService {
addService(model: { title: string; description: string; }) {
  throw new Error('Method not implemented.');
}
private baseUrl = 'http://localhost:3000'; // backend URL


constructor(private http: HttpClient) {}


getServices(): Observable<any[]> {
return this.http.get<any[]>(`${this.baseUrl}/services`);
}


sendContact(data: any): Observable<any> {
return this.http.post(`${this.baseUrl}/contact`, data);
}
}