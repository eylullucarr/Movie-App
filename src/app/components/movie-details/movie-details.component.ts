import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MovieCardComponent } from '../movie-card/movie-card.component';
<<<<<<< HEAD
=======
import { MovieServiceService } from 'src/app/services/movie-service.service';
>>>>>>> development

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, CardModule, MovieCardComponent],
})
export class MovieDetailsComponent implements OnInit {
<<<<<<< HEAD
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      console.log(id);
=======
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieServiceService
  ) {}
  movie: any = [];
  id: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.movieService.getMoviesId(this.id).subscribe((response) => {
      this.movie = response;
      console.log(this.movie);
>>>>>>> development
    });
  }
}
