import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { map } from 'rxjs/operators'
import { database } from 'firebase';



@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  categoriass?: Categoria[];
  categoriaDeCategorias?: Categoria;
  categoriaIndex =-1;
  nombre: string ='';


  constructor(private categoriaServices:CategoriaService) { }

  ngOnInit(): void {
    this.recibirDatosDB();
  }

  //Refresca los valores desde la base de datos 
  refrescarCategorias(): void{
    this.categoriaDeCategorias=undefined;
    this.categoriaIndex=-1;
    this.recibirDatosDB();
  }
//Recibe los datos almacenados en la base de datos 
  recibirDatosDB(): void{
    this.categoriaServices.getAll().snapshotChanges().pipe(
      map(cambiar => 
        cambiar.map(c =>({
          id: c.payload.key, ...c.payload.val()
        }))
    )  
    ).subscribe(data => {
      this.categoriass = data;
    })
  }

  //Configuracion
  configuracionDeCategoria(categoriass :Categoria , index :number):void{
    this.categoriaDeCategorias= categoriass;
    this.categoriaIndex=index;
  }


  //Elimina todos los datos almacenados en la base de datos 
  eliminarTodo():void{
    this.categoriaServices.deleteAll()
    .then(()=> this.refrescarCategorias())
    .catch(err => console.log(err))
  }

}
