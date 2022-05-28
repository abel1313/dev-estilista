import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';

const DIRECTIVAS = [
  AgregarClienteComponent
];
@NgModule({
  declarations: [
    DIRECTIVAS
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ], exports:[
    DIRECTIVAS
  ]
})
export class ClientesModule { }
