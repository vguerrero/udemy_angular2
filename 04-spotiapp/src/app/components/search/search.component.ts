import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {


  artistas: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(termino: string) {
    console.log(termino);
    this.spotifyService.getArtista(termino).subscribe((data: any) => {
      this.artistas = data;
    })
  }

}
