import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { ShowInventarioComponent } from './inventario/show-inventario/show-inventario.component';
import { ShowUsuariosComponent } from './inventario/show-usuarios/show-usuarios.component';

const routes: Routes = [
  { path: 'Inventario', component: ShowInventarioComponent },
  { path: 'Usuarios', component: ShowUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
