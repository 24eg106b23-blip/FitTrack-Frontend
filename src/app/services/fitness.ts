import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  calculateBMI(data: any): Observable<any> {

    return this.http.post<any>(
      `${this.apiUrl}/bmi/calculate`,
      data
    );
  }

  getBMIHistory(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.apiUrl}/bmi/history`
    );
  }

  deleteBMIRecord(id: number): Observable<any> {

    return this.http.delete<any>(
      `${this.apiUrl}/bmi/history/${id}`
    );
  }

  clearBMIHistory(): Observable<any> {

    return this.http.delete<any>(
      `${this.apiUrl}/bmi/history`
    );
  }
}