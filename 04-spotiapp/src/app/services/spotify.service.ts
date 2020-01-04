import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'
import { pipe } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("SpotifyService listo.");
  }

  getNewRealeses() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCP57O4g66mgBEJTPaKmZuvUgPBvMDNCa4N69icq8KBugYnlMwUQN4vIDSOnfieFMFRV0fGXF0Fj76Rm9s'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  /*busqueda de artista servicios de spotify*/
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCP57O4g66mgBEJTPaKmZuvUgPBvMDNCa4N69icq8KBugYnlMwUQN4vIDSOnfieFMFRV0fGXF0Fj76Rm9s'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers })
      .pipe(map(data =>  data['artists'].items ));
  }
}
