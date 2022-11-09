import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, first, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notify } from 'notiflix';
import { Usuarios } from '../inventario/interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly inventarioAPIUrl = "https://localhost:44319/api";

  constructor(
    public http: HttpClient
  ) { }
  // metodos para los usuarios

    getUsuarioList():Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.inventarioAPIUrl + '/Usuario');
    }

    addUsuario(data:any){
    return this.http.post(this.inventarioAPIUrl + '/Usuario', data);
    }

    updateUsuario(id:number|string, data:any) {
    return this.http.put(this.inventarioAPIUrl + `/Usuario/${id}`, data);
    }

    deleteUsuario(id:number|string) {
    return this.http.delete(this.inventarioAPIUrl + `/Usuario/${id}`);
    }
}
