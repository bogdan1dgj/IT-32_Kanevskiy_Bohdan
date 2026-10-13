import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {
  submitted = false;

  movie = {
    title: '',
    director: '',
    description: ''
  };

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  addItem(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movieService.addItem(this.movie);

    form.resetForm();
    this.submitted = false;

    this.router.navigate(['/movies']);
  }
}
