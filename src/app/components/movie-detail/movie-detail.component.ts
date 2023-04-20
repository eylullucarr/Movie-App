import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    RouterModule,
  ],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieServiceService
  ) {}
  movie: any = [];
  id: any;
  newSummary = '';
  searchQuery: any;

  removePTags(text: string) {
    return text.replace(/<\/?p>/gi, '').replace(/<\/?(b|i)>/gi, '');
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.movieService.getMoviesId(this.id).subscribe((response) => {
      this.movie = response;
      console.log(this.movie);
      this.newSummary = this.removePTags(this.movie.summary);
    });
    this.searchQuery = this.movieService.getQuery();
    console.log(this.searchQuery);
  }

  backpage() {
    this.movieService.getMovies(this.searchQuery).subscribe((response) => {
      console.log(response);
      this.movie = response;
      this.router.navigate(['movies']);
    });
  }
}
