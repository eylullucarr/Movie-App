import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    RouterModule,
    MovieDetailComponent,
  ],
})
export class MovieCardComponent implements OnInit {
  @Input('movie') movie: any;

  constructor(private router: Router) {}

  removePTags(text: string) {
    return text.replace(/<\/?p>/gi, '').replace(/<\/?(b|i)>/gi, '');
  }

  newSummary = '';

  ngOnInit(): void {
    console.log(this.movie);
    this.newSummary = this.removePTags(this.movie.show.summary);
  }
}
