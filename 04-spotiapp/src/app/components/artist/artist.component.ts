import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private sportifyService: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      console.log(this.artista);
      this.getArtista(params['id']);
    });

  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loading = true;

    this.sportifyService.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

}
