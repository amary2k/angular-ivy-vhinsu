import { Component } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieDataService } from '../service/movie-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'streaming-service';
  movieList: Movie[];
  movieDetail: Movie;
  myStyles;
  constructor(private movieService: MovieDataService) {}

  ngOnInit() {
    this.movieList = this.movieService.getMovieList();
    this.movieDetail = {
      adult: false,
      backdrop_path: '',
      genre_ids: [0],
      id: 0,
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      release_date: '',
      title: 'Welcome',
      video: false,
      vote_average: 0,
      vote_count: 0,
    };
  }

  movieSelectEvent(movie: Movie) {
    this.movieDetail = movie;
    this.myStyles = 'url(' + movie.backdrop_path + ')';
  }
}
