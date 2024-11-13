import { Route } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from './../producto';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css',
})

export class AgregarProductoComponent {
  //este objeto lo usaremos en el formulario para capturar la informacion de los campos de informacion
  producto: Producto = new Producto();

  //con router redirigiremos al listado de los productos
  constructor(
    private productoServicio: ProductoService,
    private enrutador: Router
  ) {}

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoServicio.agregarProducto(this.producto).subscribe({
      next: (datos) => {
        this.irListaProductos();
      },
      error: (error: any) => {
        console.log(error);
      },
    });

  }

  irListaProductos() {
    this.enrutador.navigate(['/productos']);
  }
}
