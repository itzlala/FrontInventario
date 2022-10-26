import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { InventarioApiService } from 'src/app/inventario-api.service';

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
    this.usuarioLista$ = this.service.getUsuarioList();
  }

}
