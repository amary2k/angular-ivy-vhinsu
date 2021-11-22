import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieDetail: Movie;
  private url: string = '';
  constructor() {}

  ngOnInit() {}
}
