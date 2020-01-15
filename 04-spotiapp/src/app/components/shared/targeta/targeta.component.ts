import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targeta',
  templateUrl: './targeta.component.html',

})
export class TargetaComponent implements OnInit {


  @Input() items: any[] = [];

  constructor(private router: Router) {


  }

  ngOnInit() {
  }

  verArtista(item: any) {
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    }
    else {
      if (item.artists) {
        artistaId = item.artists[0].id;
      }
    }
    if (artistaId) {
      this.router.navigate(['/artist', artistaId]);
    }

  }

}
