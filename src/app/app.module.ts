import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './inventario/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ShowInventarioComponent } from './inventario/show-inventario/show-inventario.component';
import { AddEditInventarioComponent } from './inventario/add-edit-inventario/add-edit-inventario.component';
import { InventarioApiService } from './services/inventario-api.service';
import { HtmlParser } from '@angular/compiler';
import { ShowUsuariosComponent } from './inventario/show-usuarios/show-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    ShowInventarioComponent,
    AddEditInventarioComponent,
    ShowUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule
  ],
  providers: [InventarioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
