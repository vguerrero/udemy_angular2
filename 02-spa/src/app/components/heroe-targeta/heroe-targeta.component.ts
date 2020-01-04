import { Router } from '@angular/router';
import { Heroe } from './../../services/heroes.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent implements OnInit {

  @Input() private heroe: any = {};

  @Input() private indice: number = 0;


  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit() {
  }

  verHeroe(){
    //this.router.navigate('/heroe',this.heroe.id);
    this.heroeSeleccionado.emit(this.heroe.id);
  }
}
