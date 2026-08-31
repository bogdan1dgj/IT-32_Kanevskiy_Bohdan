import { Component } from '@angular/core';
import { NewsCard } from './news-card/news-card';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsCard],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {

  newsOpened(): void {
    alert('Відкрито новину');
  }
}