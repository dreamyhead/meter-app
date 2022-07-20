import { Meters } from './../interfaces/Meters';
import { Records } from './../interfaces/Records';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  constructor(private http: HttpClient) { }

  getAllMeters(): Observable<Meters[]> {
    return this.http.get<Meters[]>('https://localhost:44379/api/meter')
  }

  getAllMeterParams(meterId: number, recordDate: Date): Observable<Records[]> {
    return this.http.get<Records[]>(`https://localhost:44379/api/record/${meterId}&${recordDate}`)
  }
}
