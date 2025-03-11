import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iarmaduras } from '../iarmaduras';
import { Iarmas } from '../iarmas';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrlArmas = 'https://mhw-db.com/weapons/';
  private apiUrlArmaduras = 'https://mhw-db.com/armor/';

  constructor(private http: HttpClient) {}

  obtenerArmas(): Observable<Iarmas[]> {
    return this.http.get<Iarmas[]>(this.apiUrlArmas);
  }

  obtenerArmaduras(): Observable<Iarmaduras[]> {
    return this.http.get<Iarmaduras[]>(this.apiUrlArmaduras);
  }

}
