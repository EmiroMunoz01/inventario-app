import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from './../producto';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  id: number;

  constructor(
    private productoServicio: ProductoService,
    //necesitamos este objeto para recibir el id
    private ruta: ActivatedRoute,
    private enrutador: Router
  ) {}

  ngOnInit() {
    //con esta sintaxis obtenemos el id de la url en el componente cuando hacemos clic, asi tenemos el id que queremos recuperar de la base de datos
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe({
      next: (datos) => {
        this.producto = datos;
      },
      error: (errores: any) => console.log(errores),
    });
  }

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoServicio.editarProducto(this.id, this.producto).subscribe({
      next: (datos) => this.irProductoLista(),
      error: (errores) => console.log(errores),
    });
  }

  irProductoLista() {
    this.enrutador.navigate(['/productos']);
  }
}
