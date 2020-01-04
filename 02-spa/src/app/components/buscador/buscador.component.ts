import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from './../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {


  private heroes:Heroe[]=[];
  private terminoBusqueda:string;

  constructor(private activatedRoute: ActivatedRoute, private router:Router,
    private heroesservice: HeroesService) {

      
     }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      let termino = params["termino"];
      this.terminoBusqueda=termino;
      this.heroes = this.heroesservice.buscarHeroes(termino);
      console.log(this.heroes);
    });

  }

  verHeroe(idx: number) {
    console.log(idx);
    //let h = this.heroesservice.buscarHeroesPorId(idx);
    this.router.navigate(['/heroe/', idx]);
  }

}
