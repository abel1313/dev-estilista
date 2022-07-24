import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';

const routes: Routes = [
  {
    path: '', component: MostrarProductoComponent
  },
  {
    path: 'mostrar', component: MostrarProductoComponent
  },
  {
    path: 'agregar', component: AgregarProductoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
