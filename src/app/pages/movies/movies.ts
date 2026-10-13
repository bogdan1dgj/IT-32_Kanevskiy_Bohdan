import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {
  constructor(public movieService: MovieService) {}

  get movies() {
    return this.movieService.getItems();
  }
}