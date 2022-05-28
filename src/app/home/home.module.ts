import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesModule } from './clientes/clientes.module';
import { HomeComponent } from './home.component';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientesModule
  ]
})
export class HomeModule { }
