import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-usuario',
  templateUrl: './feedback-usuario.component.html',
  styleUrls: ['./feedback-usuario.component.css']
})
export class FeedbackUsuarioComponent implements OnInit {

  constructor(private feed: FormBuilder) {}

    feedbackForm = this.feed.group({
      nome:['', [Validators.required]],
      email:['', [Validators.required, Validators.email], Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      comentario:['', [Validators.required ]],
      nota:['',[Validators.required, Validators.pattern('[0-5]'), Validators.pattern('')]],
    });

    get nome(){
      return this.feedbackForm.get('nome');
    }

    get email (){
      return this.feedbackForm.get('email')
    }

    get comentario (){
      return this.feedbackForm.get('comentario')
    }

    get nota (){
      return this.feedbackForm.get('nota')
    }

    onSubmit(){
      alert('Obrigado');
      console.log(this.feedbackForm.value);
    }

  ngOnInit(): void {
  }

}

