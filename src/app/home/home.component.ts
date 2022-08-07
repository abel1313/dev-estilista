import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  formCliente: FormGroup;
  constructor(private readonly fb: FormBuilder) { 

  }

  ngOnInit(): void {
    this.formCliente = this.fb.group({
      primer: ['',[Validators.required, Validators.maxLength(30)]],
    });

  }

  guardarCliente(): void{
      console.log(this.formCliente.value)
  }

}
