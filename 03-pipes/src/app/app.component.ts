import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = "Victor";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  salario = 1324.5;

  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: '500',
    direccion: {
      calle: 'Primera',
      casa: 19
    }

  };

  valordePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llego la data'), 3500);
  });

  fecha = Date();

  nombre2 = "victor maNUel guerrero";
  video: string = "tgbNymZ7vqY";

}
