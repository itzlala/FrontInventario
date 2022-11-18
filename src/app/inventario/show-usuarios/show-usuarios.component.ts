import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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

  displayedColumns: string[] = ['IdUsuario','DocumentoIdentidad','Nombres','Telefono','Correo','Ciudad','FechaRegistro'];
  ELEMENT_DATAUSU!: Observable<Usuarios[]>;
  usuarioLista$!:Observable<any[]>;
  usuarioLista:any=[];

  dataSource = new MatTableDataSource<Usuarios>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // Map to display data associate with foreign keys
  usuarioMap:Map<number, string> = new Map()
  
  constructor(
    private service: UsuarioService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.recargaPagina();
    this.mostrarUsuarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Elementos por pagina';
  }

  mostrarUsuarios()
  {
    //this.ELEMENT_DATAUSU = this.service.getUsuarioList();
    //this.usuarioLista$ = this.service.getUsuarioList();
    this.service.getUsuarioList().subscribe(result => {
      this.dataSource.data = result
    });
  }
  redirigeAlHome()
  {
    this.router.navigate(["home"])
  }

  openDialogU()
  {
    
  }

  recargaPagina()
  {
    Notiflix.Loading.circle();
    Notiflix.Loading.remove(1000);
  }

}
