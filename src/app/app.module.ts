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

@NgModule({
  declarations: [
    AppComponent,
    ShowInventarioComponent,
    AddEditInventarioComponent,
    ShowUsuariosComponent,
    PageNotFoundComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTES,
    ReactiveFormsModule
  ],
  providers: [InventarioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
