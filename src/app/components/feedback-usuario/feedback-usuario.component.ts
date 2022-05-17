import { RatingComponent } from './../rating/rating.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppComponent,  } from 'src/app/app.component';


@Component({
  selector: 'app-feedback-usuario',
  templateUrl: './feedback-usuario.component.html',
  styleUrls: ['./feedback-usuario.component.css']
})
export class FeedbackUsuarioComponent implements OnInit {

  @Input('rating') rating: number = 3;
  @Output() ratingUpdated = new EventEmitter();
  totalStar: number = 5;
  ratingArray: number[] = [];

  onRatingChanged(rating: number) {
    this.rating = rating;
  }

  constructor(private feed: FormBuilder) {}

    feedbackForm = this.feed.group({
      nome:['', [Validators.required]],
      email:['', [Validators.required, Validators.email], Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      comentario:['', [Validators.required ]],
      nota:['',[Validators.required]],
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

