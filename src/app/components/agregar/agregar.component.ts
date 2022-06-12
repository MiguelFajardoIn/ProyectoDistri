import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  categoria: Categoria =new Categoria();
  datosSuministrados = false ;

  constructor(private categoriaService: CategoriaService) { }

  guardarCategoriasCreadas(): void{
    this.categoriaService.create(this.categoria).then(() => {
      console.log("la categoria fue creada con exito ");
      this.datosSuministrados=true;
    });
  }

  nuevoCategoria(): void{
    this.datosSuministrados=false;
    this.categoria= new Categoria;
  }

  ngOnInit(): void {
  }

}
