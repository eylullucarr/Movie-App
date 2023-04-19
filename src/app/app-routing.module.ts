import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

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
