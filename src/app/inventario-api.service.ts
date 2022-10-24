import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioApiService {
  
  readonly inventarioAPIUrl = "https://localhost:44319/api";
  
  constructor(private http:HttpClient) {
  
   }
   // metodos del inventario

   getInventarioList():Observable<any[]> {
    return this.http.get<any>(this.inventarioAPIUrl + '/Inventario');
   }

   addInventario(data:any){
    return this.http.post(this.inventarioAPIUrl + '/Inventario', data);
   }

   updateInventario(id:number|string, data:any) {
    return this.http.put(this.inventarioAPIUrl + `/Inventario/${id}`, data);
   }

   deleteInventario(id:number|string) {
    return this.http.delete(this.inventarioAPIUrl + `/Inventario/${id}`);
   }

   // metodos para los usuarios

   getUsuarioList():Observable<any[]> {
    return this.http.get<any>(this.inventarioAPIUrl + '/Usuario');
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

   // Estados

   getEstadoList():Observable<any[]> {
    return this.http.get<any>(this.inventarioAPIUrl + '/Estado');
   }

   addEstado(data:any){
    return this.http.post(this.inventarioAPIUrl + '/Estado', data);
   }

   updateEstado(id:number|string, data:any) {
    return this.http.put(this.inventarioAPIUrl + `/Estado/${id}`, data);
   }

   deleteEstado(id:number|string) {
    return this.http.delete(this.inventarioAPIUrl + `/Estado/${id}`);
   }
}
