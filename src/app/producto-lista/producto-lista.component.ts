import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {
  productos: Producto[];

  //con el producto servicio nos podremos conectar a la capa de servicio y llamar al metodo de obtener lista
  constructor(
    private productoServicio: ProductoService,
    private enrutador: Router
  ) {}

  ngOnInit() {
    //cargaremos todos los productos
    this.obtenerProductos();
  }

  private obtenerProductos() {
    this.productoServicio.obtenerProductosLista().subscribe((datos) => {
      this.productos = datos;
    });
  }


  
  editarProducto(id: number) {
    this.enrutador.navigate(['editar-producto', id]);
  }
}
