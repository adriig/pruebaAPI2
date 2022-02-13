import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
// Definimos el Schema
const productosSchema = new Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _NombreProducto: {
        type: String
    },

    _CategoriaProducto: {
        type: String
    },

    _PrecioBase: {
        type: Number
    },

    _NotaMedia: {
        type: Number
    },

    _Almacenamiento: {
        type: Array
    },
    _Talla: {
        type: String
    },
    _GBRam: {
        type: Number
    },
    _Megapixeles: {
        type: Number
    },
    _GHz: {
        type: Number
    },
})

export type iProducto = {
    _id: number | null, // para acceder en la subclase
    _NombreProducto: string | null,
    _CategoriaProducto: string | null,
    _PrecioBase: number | null,
    _NotaMedia: number | null,
    _Almacenamiento: Array<any> | null,
}

export type iRopa = {
    _id: number | null, // para acceder en la subclase
    _NombreProducto: string | null,
    _CategoriaProducto: string | null,
    _PrecioBase: number | null,
    _NotaMedia: number | null,
    _Almacenamiento: Array<any> | null,
    _Talla: string | null
}

export type iMovil = {
    _id: number | null, // para acceder en la subclase
    _NombreProducto: string | null,
    _CategoriaProducto: string | null,
    _PrecioBase: number | null,
    _NotaMedia: number | null,
    _Almacenamiento: Array<any> | null,
    _GBRam: number | null,
    _Megapixeles: number | null,
}

export type iProcesador = {
    _id: number | null, // para acceder en la subclase
    _NombreProducto: string | null,
    _CategoriaProducto: string | null,
    _PrecioBase: number | null,
    _NotaMedia: number | null,
    _Almacenamiento: Array<any> | null,
    _GHz: number | null
}
// La colección de la BD (Plural siempre)
export const ProductoDB = model('products', productosSchema)