import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { map, Observable } from 'rxjs';
import { InventarioApiService } from 'src/app/services/inventario-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Inventario } from '../interfaces/inventario';


const ELEMENT_DATA: Inventario[] = [];

@Component({
  selector: 'app-show-inventario',
  templateUrl: './show-inventario.component.html',
  styleUrls: ['./show-inventario.component.css']
})
export class ShowInventarioComponent implements OnInit {

  
  inventarioLista$!:Observable<any[]>;
  inventarioLista:any=[];
  //dataSource = new MatTableDataSource<Inventario>(this.inventarioLista);

  // Map to display data associate with foreign keys
  usuarioMap:Map<number, string> = new Map()

  constructor(private service: InventarioApiService) { }

  ngOnInit(): void {
    this.recargaPagina();
    this.mostrarInventario();
  }

  mostrarInventario()
  {
    this.inventarioLista$ = this.service.getInventarioList();
  }
  recargaPagina()
  {
    Notiflix.Loading.circle();
    Notiflix.Loading.remove(1000);
  }

}
