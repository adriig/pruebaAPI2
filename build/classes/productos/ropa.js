"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ropa = void 0;
class Ropa {
    constructor(id, nombre, categoria, precio, notaMedia, almacenamiento, Talla) {
        this._id = id;
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._PrecioBase = precio;
        this._NotaMedia = notaMedia;
        this._Almacenamiento = almacenamiento;
        this._Talla = Talla;
    }
    calculoPrecio() {
        let precioFinal = (this._PrecioBase + this._Talla) * 1.21;
        return precioFinal;
    }
}
exports.Ropa = Ropa;
