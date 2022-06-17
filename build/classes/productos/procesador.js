"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procesador = void 0;
class procesador {
    constructor(id, nombre, categoria, precio, notaMedia, almacenamiento, GHz) {
        this._id = id;
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._PrecioBase = precio;
        this._NotaMedia = notaMedia;
        this._Almacenamiento = almacenamiento;
        this._GHz = GHz;
    }
    calculoPrecio() {
        let precioFinal = (this._PrecioBase + this._GHz * 10) * 1.21;
        console.log("Precio: " + precioFinal);
        return precioFinal;
    }
}
exports.procesador = procesador;
