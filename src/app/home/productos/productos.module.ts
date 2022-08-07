import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AddComponent } from './add/add.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddComponent,
    BuscarComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
