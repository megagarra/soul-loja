import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

function onlySoulcode(control: AbstractControl): ValidationErrors | null {
  if(!control.value.includes('@soulcodeacademy.org')){
    return {onlysoulcode: true};
  }
  return null;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

    cadastroForm = this.fb.group({
      nome:['', [Validators.required]],
      email:['', [Validators.required, Validators.email, onlySoulcode]],
      endereco:['', [Validators.required, Validators.maxLength(50)]],
      senha:['',[Validators.required, Validators.minLength(8)]],
    });

    get nome(){
      return this.cadastroForm.get('nome');
    }

    get email (){
      return this.cadastroForm.get('email')
    }

    get endereco (){
      return this.cadastroForm.get('endereco')
    }

    get senha (){
      return this.cadastroForm.get('senha')
    }

    onSubmit(){
      alert('Bem vindo!');
      console.log(this.cadastroForm.value);
    }

  ngOnInit(): void {
  }

}
