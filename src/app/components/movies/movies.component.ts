import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

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
    private cdr: ChangeDetectorRef
  ) {}

  Query: any;
  movies: any = [];

  search(searchQuery: string) {
    console.log(searchQuery);
    this.movieservice.getMovies(searchQuery).subscribe((response) => {
      console.log(response);
      this.movies = response;
      console.log(response.show.name);
      this.cdr.detectChanges();
    });
  }
}
