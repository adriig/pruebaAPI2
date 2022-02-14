"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movil = void 0;
class Movil {
    constructor(id, nombre, categoria, precio, notaMedia, almacenamiento, GBRam, Megapixeles) {
        this._id = id;
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._PrecioBase = precio;
        this._NotaMedia = notaMedia;
        this._Almacenamiento = almacenamiento;
        this._GBRam = GBRam;
        this._Megapixeles = Megapixeles;
    }
    calculoPrecio() {
        let precioFinal = (this._PrecioBase + this._GBRam * 5 + (this._Megapixeles) * 2) * 1.21;
        return precioFinal;
    }
}
exports.Movil = Movil;
