import { Component } from '@angular/core';
import { AddMovie } from './pages/add-movie/add-movie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddMovie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
