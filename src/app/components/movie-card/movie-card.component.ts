import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Component, EventEmitter, Input, Output } from '@angular/core';
=======
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
>>>>>>> development
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
=======
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
>>>>>>> development

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
<<<<<<< HEAD
    MovieDetailsComponent,
=======
    MovieDetailComponent,
>>>>>>> development
  ],
})
export class MovieCardComponent {
  @Input('movie') movie: any;
<<<<<<< HEAD
  @Output() idEvent = new EventEmitter<number>();

  atsanaoc(id: number) {
    this.idEvent.emit(id);
  }
  constructor(private router: Router) {}
=======

  constructor(private router: Router) {}

  removePTags(text: string) {
    return text.replace(/<\/?p>/gi, '').replace(/<\/?(b|i)>/gi, '');
  }

  newSummary = '';

  ngOnInit(): void {
    console.log(this.movie);
    this.newSummary = this.removePTags(this.movie.show.summary);
  }
>>>>>>> development
}
