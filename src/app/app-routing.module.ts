import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { ShowInventarioComponent } from './inventario/show-inventario/show-inventario.component';
import { ShowUsuariosComponent } from './inventario/show-usuarios/show-usuarios.component';
import { LoginComponent } from './inventario/login/login.component';
import { PageNotFoundComponentComponent } from './inventario/page-not-found-component/page-not-found-component.component';
import { PanelOpcionesComponent } from './inventario/panel-opciones/panel-opciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: PanelOpcionesComponent },
  { path: 'inventario', component: ShowInventarioComponent },
  { path: 'usuarios', component: ShowUsuariosComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];
export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
