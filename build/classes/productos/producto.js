"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    constructor(id, nombre, categoria, precio, notaMedia, almacenamiento) {
        this._id = id;
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._PrecioBase = precio;
        this._NotaMedia = notaMedia;
        this._Almacenamiento = almacenamiento;
    }
    todo() {
        return `IdProducto: ${this._id} \n
                Nombre: ${this._NombreProducto} \n
                Categoria: ${this._CategoriaProducto} \n
                Precio Base: ${this._PrecioBase} \n
                Nota Media: ${this._NotaMedia} \n
                Almacenado en: ${this._Almacenamiento} `;
    }
    calculoPrecio() {
        let precioFinal = this._PrecioBase * 1.21;
        console.log("Precio: " + precioFinal);
        return precioFinal;
    }
}
exports.Producto = Producto;
