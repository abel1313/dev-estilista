import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesModule } from './clientes/clientes.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientesModule,
    ComponentsModule,
    SharedModule
    
  ]
})
export class HomeModule { }
