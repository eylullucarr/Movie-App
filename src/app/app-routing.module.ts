import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';

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
    component: MovieDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
