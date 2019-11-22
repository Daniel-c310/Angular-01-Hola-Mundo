import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {

  mostrar: true;

  frase:any = { //Ete es un objeto
    mensaje: 'Un gran poder require una gran respnsabilidad',
    autor: 'Ben Parker'
  };

  //string para los personajes que aparecen en la pag
  personajes:string[] = ["Spiderman", "Venom", "Dr. Octopus"];
}
