import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { map, Observable } from 'rxjs';
import { InventarioApiService } from 'src/app/services/inventario-api.service';

@Component({
  selector: 'app-show-usuarios',
  templateUrl: './show-usuarios.component.html',
  styleUrls: ['./show-usuarios.component.css']
})
export class ShowUsuariosComponent implements OnInit {

  usuarioLista$!:Observable<any[]>;
  usuarioLista:any=[];

  // Map to display data associate with foreign keys
  usuarioMap:Map<number, string> = new Map()
  
  constructor(private service: InventarioApiService) { }

  ngOnInit(): void {
    this.recargaPagina();
    this.mostrarUsuarios();
  }

  mostrarUsuarios()
  {
    this.usuarioLista$ = this.service.getUsuarioList();
  }

  recargaPagina()
  {
    Notiflix.Loading.circle();
    Notiflix.Loading.remove(1000);
  }

}
