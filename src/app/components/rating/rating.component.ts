import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeedbackUsuarioComponent } from '../feedback-usuario/feedback-usuario.component';

@Component({
  selector: 'mat-star-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input('rating') rating: number = 3;
  @Output() ratingUpdated = new EventEmitter();
  totalStar: number = 5;
  ratingArray: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }

  onRatingChanged(rating: number) {
    this.rating = rating;
  }

  calculateRating(rating: number) {
    this.ratingUpdated.emit(rating);
  }

  iconStatus(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
