import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../models/Iproducto.model';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.sass']
})
export class MostrarComponent implements OnInit {

  @Input() listaProductos: Array<IProducto>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
