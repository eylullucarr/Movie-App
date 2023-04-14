import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
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
    component: MovieDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
