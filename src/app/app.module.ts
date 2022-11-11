import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowInventarioComponent } from './inventario/show-inventario/show-inventario.component';
import { AddEditInventarioComponent } from './inventario/add-edit-inventario/add-edit-inventario.component';
import { InventarioApiService } from './services/inventario-api.service';
import { HtmlParser } from '@angular/compiler';
import { ShowUsuariosComponent } from './inventario/show-usuarios/show-usuarios.component';
import { PageNotFoundComponentComponent } from './inventario/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './inventario/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelOpcionesComponent } from './inventario/panel-opciones/panel-opciones.component';
//angular material
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    ShowInventarioComponent,
    AddEditInventarioComponent,
    ShowUsuariosComponent,
    PageNotFoundComponentComponent,
    LoginComponent,
    PanelOpcionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTES,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [InventarioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
