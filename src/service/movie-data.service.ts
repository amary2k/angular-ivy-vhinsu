import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import * as MOCKDATA from '../assets/json/ProgrammingAssignment-Data.json';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  constructor() {}

  getMovieList(): Movie[] {
    return MOCKDATA.results;
  }
}
