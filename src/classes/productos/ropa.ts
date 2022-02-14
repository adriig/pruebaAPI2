export class Ropa {
    public _id: number;
    public _NombreProducto: string;
    public _CategoriaProducto: string;
    public _PrecioBase: number;
    public _NotaMedia: number;
    public _Almacenamiento: [];
    public _Talla: number

    public constructor(id: number, nombre: string, categoria: string, precio: number, notaMedia: number, almacenamiento: [], Talla: number){
        this._id=id;
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._PrecioBase = precio;
        this._NotaMedia = notaMedia
        this._Almacenamiento = almacenamiento;
        this._Talla= Talla
    }

    calculoPrecio() {
        let precioFinal = (this._PrecioBase + this._Talla)*1.21
        return precioFinal
    }
} 