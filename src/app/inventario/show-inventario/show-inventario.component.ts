import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as Notiflix from 'notiflix';
import { map, Observable } from 'rxjs';
import { InventarioApiService } from 'src/app/services/inventario-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Inventario } from '../interfaces/inventario';
import { MatPaginator } from '@angular/material/paginator';




@Component({
  selector: 'app-show-inventario',
  templateUrl: './show-inventario.component.html',
  styleUrls: ['./show-inventario.component.css']
})
export class ShowInventarioComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['IdInventario','Folio','Tipo','Estatus','DescFis','DescTec','Marca','Modelo','NomProd','Nserie','Costo','Lugar','Asignacion','Observaciones','FechaRegistro'];
  ELEMENT_DATAINV!: Observable<Inventario[]>;
  inventarioLista!:Observable<any[]>;
  inventarioLista1: any=[];
  
  dataSource = new MatTableDataSource<Inventario>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Map to display data associate with foreign keys
  usuarioMap:Map<number, string> = new Map()

  constructor(private service: InventarioApiService) { }

  ngOnInit(): void {
    this.recargaPagina();
    this.mostrarInventario();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  mostrarInventario()
  {
    //this.inventarioLista$ = this.service.getInventarioList();
    this.service.getInventarioList().subscribe(result => {
      this.dataSource.data = result
    });
    
    
  }
  recargaPagina()
  {
    Notiflix.Loading.circle();
    Notiflix.Loading.remove(1000);
  }

}
