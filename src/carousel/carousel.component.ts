import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('leftRight', [
      state(
        'left',
        style({
          transform: 'translateX(-200px)',
        })
      ),
      state(
        'right',
        style({
          transform: 'translateX(200px)',
        })
      ),
      transition('* => left', [animate('1s')]),
      transition('* => right', [animate('1s')]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() movieList: Movie[];
  @Output() private movieSelectEvent: EventEmitter<Movie> =
    new EventEmitter<Movie>();
  state = '';
  constructor() {}

  ngOnInit() {}

  moveCarouselLeft() {
    this.state = 'left';
  }

  moveCarouselRight() {
    this.state = 'right';
  }

  movieSelected(index) {
    this.movieSelectEvent.emit(this.movieList[index]);
  }
}
