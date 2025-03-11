import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMonstruoService {

  private apiUrl = 'http://localhost/api-ang/api.php';  // Asegúrate de que esta URL apunte a tu archivo PHP
  constructor(private http: HttpClient) { }



  // Método para obtener todos los monstruos
  getMonstruos(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Método para crear un monstruo
  crearMonstruo(monstruo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, monstruo);
  }

  // Método para actualizar un monstruo
  actualizarMonstruo(monstruo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}?id=${monstruo.id}`, monstruo);
  }

  // Método para eliminar un monstruo
  eliminarMonstruo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}`, {
      body: { id: id }  // Enviamos el ID en el cuerpo de la solicitud
    });
  }
}