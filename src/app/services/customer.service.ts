import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// evnvironment.ts


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private apiUrl = 'http://192.168.1.100:8080/api/customers'; // Backend URL //(environment.ts)

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  addCustomers(customer: any): Observable<any> {
    return this.http.post(this.apiUrl, customer);
  }

  manageCustomers(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
