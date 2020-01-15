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
      'Authorization': 'Bearer BQC--jGqwVN4UOk3PzK1HY1oc9VzoRzY3GqR5vfTzaelAn4xAuFXT3A5N94Ab_tFoA44zyq3v-inhqOa8WI'
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
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
      //.pipe(map(data => data['artists'].items));

  }
}
