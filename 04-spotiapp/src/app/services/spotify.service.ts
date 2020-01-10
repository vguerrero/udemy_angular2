import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'
import { pipe } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("SpotifyService listo.");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBpIHd_U0TkKT6BbQkgzgzLllvGzjAFjG20nJztSu7JPEzADO9qjbCK1wjnZ7pH_s-0SAr1YLDlcGf0oTo'
    });
    return this.http.get(url, { headers });
  }

  getNewRealeses() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  /*busqueda de artista servicios de spotify*/
  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));
  }
}
