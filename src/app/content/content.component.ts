import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  public arrayAlumnos: any = [];


  CargarDatos()
  {
    this.arrayAlumnos = []
    this.arrayAlumnos.push(
      {nombre:"Simon Daniel Meraz Sariñana", pais: "Mexico", estado: "Durango", FechaNacimiento: "08/08/1990"},
      {nombre:"Arturo Hernandez", pais: "Mexico", estado: "Nuevo Leon", FechaNacimiento: "25/12/1991"},
      {nombre:"Marcelino Zamarripa", pais: "Mexico", estado: "Durango", FechaNacimiento: "10/01/1980"},
      {nombre:"Tonantzin Meraz", pais: "Mexico", estado: "Mexico", FechaNacimiento: "20/08/2012"}
    )

  }




  ngOnit(): void {
    this.arrayAlumnos = []
  }
}