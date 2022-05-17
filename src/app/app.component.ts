import { RatingComponent } from './components/rating/rating.component';
import { Component, OnInit } from '@angular/core';
import { FeedbackUsuarioComponent } from './components/feedback-usuario/feedback-usuario.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'soul-loja';
// }

export class AppComponent implements OnInit {
  rating: number = 3;
  starCount: number = 5;


  onRatingChanged({ rating }: { rating: number; }) {
    this.rating = rating;
  }

  ngOnInit() {
  }

}
