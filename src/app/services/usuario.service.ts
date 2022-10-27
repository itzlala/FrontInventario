import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, first, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notify } from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private rutaApi = environment.urlBackEnd;

    isUserLoggedIn$ = new BehaviorSubject<boolean>(false);

    id_usuario : any;

    httpOptions : { headers : HttpHeaders } = {
      headers : new HttpHeaders({
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      })
    };

  constructor(
    public http: HttpClient,
    private router : Router
  ) { }

  public login(usuario : Usuario) : Observable<{
    token : string,
    id_usuario : Pick<Usuario, "id_usuario">
}> {
    return this.http.post(`${this.rutaApi}/login`,usuario)
    .pipe(
        first(),
        tap( (tokenObject : any ) => {
            localStorage.setItem("token",tokenObject.data.token);
            localStorage.setItem("id_usuario",tokenObject.data.id_usuario);
            this.isUserLoggedIn$.next(true);
            this.id_usuario = tokenObject.data.id_usuario;
            this.router.navigate(["app/dashboard"])
        }),
        catchError(err => {
            Notify.info(err.error.message);
            return throwError(err);
          })
    );
}
}
