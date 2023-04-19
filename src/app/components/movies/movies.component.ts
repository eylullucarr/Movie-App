import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { Router } from '@angular/router';

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
    this.movieservice.setQuery(this.Query);
    console.log(this.movieservice.getQuery());
  }

  @HostListener('keydown.enter')
  onEnter() {
    this.search();
  }
}
