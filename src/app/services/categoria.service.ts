import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private dbCategoria = '/categoria';

  misCategoriasRef:AngularFireList<Categoria>;

  constructor(private db: AngularFireDatabase) {
    this.misCategoriasRef = db.list(this.dbCategoria)
   }

   //metodo obtener todos los datos 
   getAll(): AngularFireList<Categoria>{
      return this.misCategoriasRef;
   }

   //metodo crear
   create(categoria:Categoria): any{
    return this.misCategoriasRef.push(categoria)
   }

   //metodo actualizar
   update(id: string,value: any):Promise<void>{
    return this.misCategoriasRef.update(id, value);
   }

   //metodo borrar todo
   deleteAll():Promise<void>{
    return this.misCategoriasRef.remove();
   }
  
  }
