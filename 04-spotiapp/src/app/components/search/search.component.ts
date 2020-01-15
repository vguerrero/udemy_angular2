import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {


  artistas: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
  }

  search(termino: string) {
    this.loading = termino.length > 0;
    console.log(termino);
    this.spotifyService.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    })
  }

}
