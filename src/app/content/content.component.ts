import { Component } from '@angular/core';
import { FormGroup, FormBuilder,AbstractControl,ValidationErrors,Validators  } from '@angular/forms';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  public arrayAlumnos: any = [];
  public formularioRegistro : FormGroup;

  constructor(
    private fb: FormBuilder
  ){}


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


  ngOnInit(): void {
    this.arrayAlumnos = []
    this.formularioRegistro = this.fb.group({
      inpUser:["",[Validators.required]],
      inpName:["",[Validators.required]],
      inpPassword:["",[Validators.required]],
      inpDireccion:["",[Validators.required]]
    })
  }

  submit(): void{
    console.log(this.formularioRegistro.value)
  }
}


