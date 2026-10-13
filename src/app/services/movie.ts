import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  director: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      description: 'Науково-фантастичний фільм про космос і подорожі крізь час.'
    },
    {
      id: 2,
      title: 'Avatar',
      director: 'James Cameron',
      description: 'Фантастичний фільм про планету Пандора та її мешканців.'
    },
    {
      id: 3,
      title: 'Inception',
      director: 'Christopher Nolan',
      description: 'Фільм про сни, підсвідомість і викрадення ідей.'
    }
  ];

  getItems(): Movie[] {
    return this.movies;
  }

  getItemById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  addItem(movie: Omit<Movie, 'id'>): void {
    const newMovie: Movie = {
      id: this.movies.length
        ? Math.max(...this.movies.map(item => item.id)) + 1
        : 1,
      ...movie
    };

    this.movies.push(newMovie);
  }
}