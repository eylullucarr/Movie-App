import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  private API_URL: string = `https://api.tvmaze.com/search/shows?q=`;

  constructor(private http: HttpClient) {}

  getMovies(searchQuery: string): Observable<any> {
    return this.http.get(this.API_URL + `${searchQuery}`);
  }

  getMoviesId(id: number): Observable<any> {
    return this.http.get(
      `https://api.tvmaze.com/lookup/shows?tvrage=` + `${id}`
    );
  }
}
