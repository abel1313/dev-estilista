import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs/inputs.component';
import { PickerComponent } from './picker/picker.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


const DIRECTIVAS =
[
  
  InputsComponent,
  PickerComponent
];
@NgModule({
  declarations: [
    ...DIRECTIVAS
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    ...DIRECTIVAS
  ]
})
export class ComponentsModule { }
