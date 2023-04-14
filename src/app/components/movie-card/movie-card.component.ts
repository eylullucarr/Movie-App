import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

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
    MovieDetailsComponent,
  ],
})
export class MovieCardComponent {
  @Input('movie') movie: any;

  constructor(private router: Router) {}
}
