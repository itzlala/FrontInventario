import { AfterViewInit, Component, OnInit, ViewChild, inject, Inject } from '@angular/core';
import * as Notiflix from 'notiflix';
import { map, Observable } from 'rxjs';
import { InventarioApiService } from 'src/app/services/inventario-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Inventario } from '../interfaces/inventario';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ThisReceiver } from '@angular/compiler';
import { inventario } from 'src/app/models/inventario.inventario';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddEditInventarioComponent } from '../add-edit-inventario/add-edit-inventario.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-show-inventario',
  templateUrl: './show-inventario.component.html',
  styleUrls: ['./show-inventario.component.css']
})
export class ShowInventarioComponent implements OnInit, AfterViewInit {
  animal: any;
  name: any;
  
  displayedColumns: string[] = ['IdInventario','Folio','Tipo','Estatus','DescFis','DescTec','Marca','Modelo','NomProd','Nserie','Costo','Lugar','Asignacion','Observaciones','FechaRegistro'];
  ELEMENT_DATAINV!: Observable<Inventario[]>;
  inventarioLista!:Observable<any[]>;
  inventarioLista1: any=[];
  public inventario = new inventario(0,0,"","","","","","","","","","","","","",new Date);
  
  dataSource = new MatTableDataSource<Inventario>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Map to display data associate with foreign keys
  usuarioMap:Map<number, string> = new Map()


  constructor(
    private router : Router,
    private service: InventarioApiService,
    public dialog: MatDialog
    ) { }

    openDialogI(): void {
      const dialogRef = this.dialog.open(AddEditInventarioComponent, {
        width: '250px',
        data: {name: this.name, animal: this.animal},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }

  ngOnInit(): void {
    this.recargaPagina();
    this.mostrarInventario();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Elementos por pagina';
  }

  mostrarInventario()
  {
    //this.inventarioLista$ = this.service.getInventarioList();
    this.service.getInventarioList().subscribe(result => {
      this.dataSource.data = result
    }); 
  }

  redirigeAlHome()
  {
    this.router.navigate(["home"])
  }

  insertarDatos()
  {

  }
  recargaPagina()
  {
    Notiflix.Loading.circle();
    Notiflix.Loading.remove(1000);
  }


}
