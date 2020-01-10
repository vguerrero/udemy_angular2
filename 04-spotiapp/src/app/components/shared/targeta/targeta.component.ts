import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-targeta',
  templateUrl: './targeta.component.html',

})
export class TargetaComponent implements OnInit {


  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
