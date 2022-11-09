import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { map, Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuarios } from '../interfaces/usuarios';

@Component({
  selector: 'app-show-usuarios',
  templateUrl: './show-usuarios.component.html',
  styleUrls: ['./show-usuarios.component.css']
})
export class ShowUsuariosComponent implements OnInit {

  ELEMENT_DATAUSU!: Observable<Usuarios[]>;
  usuarioLista$!:Observable<any[]>;
  usuarioLista:any=[];

  // Map to display data associate with foreign keys
  usuarioMap:Map<number, string> = new Map()
  
  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.recargaPagina();
    this.mostrarUsuarios();
  }

  mostrarUsuarios()
  {
    this.ELEMENT_DATAUSU = this.service.getUsuarioList()
    //this.usuarioLista$ = this.service.getUsuarioList();
  }

  recargaPagina()
  {
    Notiflix.Loading.circle();
    Notiflix.Loading.remove(1000);
  }

}
