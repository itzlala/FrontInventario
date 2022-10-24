import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ShowInventarioComponent } from './inventario/show-inventario/show-inventario.component';
import { AddEditInventarioComponent } from './inventario/add-edit-inventario/add-edit-inventario.component';
import { InventarioApiService } from './inventario-api.service';
import { HtmlParser } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    ShowInventarioComponent,
    AddEditInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InventarioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
