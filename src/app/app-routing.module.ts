import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaNoDisponibleComponent } from './layout/component/pagina-no-disponible/pagina-no-disponible.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clientes',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./home/servicios/servicios.module').then(s=> s.ServiciosModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./home/productos/productos.module').then(p=> p.ProductosModule)
  },
  {
    path: '**', component: PaginaNoDisponibleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
