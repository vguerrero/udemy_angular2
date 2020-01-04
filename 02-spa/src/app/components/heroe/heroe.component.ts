import { HeroesService, Heroe } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'

})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
    private heroesservice: HeroesService
  ) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this.heroesservice.buscarHeroesPorId(params['id']);
      console.log(this.heroe);
    })
  };

  ngOnInit() {
  }

}
