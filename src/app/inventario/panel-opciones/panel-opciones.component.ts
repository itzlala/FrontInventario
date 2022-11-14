import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-opciones',
  templateUrl: './panel-opciones.component.html',
  styleUrls: ['./panel-opciones.component.css']
})
export class PanelOpcionesComponent implements OnInit {

  constructor
  (
    private router : Router
  ) 
  {

  }

  ngOnInit(): void {
  }

  BotonInventario()
  {
    this.router.navigate(["inventario"])
  }
  
  BotonUsuario()
  {
    this.router.navigate(["usuarios"])
  }
}
