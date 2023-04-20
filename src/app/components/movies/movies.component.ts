import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
>>>>>>> development
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { Router, RouterModule } from '@angular/router';

import { MovieDetailsComponent } from '../movie-details/movie-details.component';
=======
import { response } from 'express';
import { Route } from '@angular/router';
>>>>>>> development

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
  search() {
    console.log(this.Query);
    this.movieservice.getMovies(this.Query).subscribe((response) => {
      console.log(response);
      this.movies = response;
    });
  }
}
