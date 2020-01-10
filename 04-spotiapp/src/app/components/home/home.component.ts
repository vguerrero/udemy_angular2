import { SpotifyService } from './../../services/spotify.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  nuevas_canciones : any[]=[];

  loading:boolean;

  constructor(private spotify: SpotifyService) {
   
    this.loading=true;

    this.spotify.getNewRealeses().subscribe((data:any) => {
      this.nuevas_canciones=data;
      this.loading=false;
    });

  }

  ngOnInit() {
  }

}
