import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DockComponent } from './components/dock/dock.component';
import { MoviesComponent } from './components/movies/movies.component';
=======
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
>>>>>>> development

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MoviesComponent,
  },
  {
    path: 'movies',
    pathMatch: 'full',
    component: MoviesComponent,
  },
  {
    path: 'movies/:id',
    pathMatch: 'full',
<<<<<<< HEAD
    component: MovieDetailsComponent,
=======
    component: MovieDetailComponent,
>>>>>>> development
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
