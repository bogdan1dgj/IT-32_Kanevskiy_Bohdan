import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})
export class NewsCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() author!: string;

  @Output() readMoreClicked = new EventEmitter<string>();

  onRead(): void {
    this.readMoreClicked.emit(this.title);
  }
}