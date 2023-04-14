import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    MovieCardComponent,
    FormsModule,
    MovieDetailsComponent,
    RouterModule,
  ],
})
export class MoviesComponent {
  constructor(
    private movieservice: MovieServiceService,
    private router: Router
  ) {}

  Query: any;
  movies: any = [];

  search() {
    console.log(this.Query);
    this.movieservice.getMovies(this.Query).subscribe((response) => {
      console.log(response);
      this.movies = response;
    });
  }
}
