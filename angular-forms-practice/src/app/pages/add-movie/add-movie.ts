import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {
  submitted = false;

  newItem = {
    title: '',
    director: '',
    description: ''
  };

  movies: any[] = [];

  addItem(form: any) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movies.push({ ...this.newItem });

    form.resetForm();
    this.submitted = false;
  }
}