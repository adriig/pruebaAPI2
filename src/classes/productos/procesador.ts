export class procesador {
    public _id: number;
    public _NombreProducto: string;
    public _CategoriaProducto: string;
    public _PrecioBase: number;
    public _NotaMedia: number;
    public _Almacenamiento: [];
    public _GHz: number;

    public constructor(id: number, nombre: string, categoria: string, precio: number, notaMedia: number, almacenamiento: [], GHz: number ){
        this._id=id;
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._PrecioBase = precio;
        this._NotaMedia = notaMedia
        this._Almacenamiento = almacenamiento
        this._GHz = GHz
    }

    calculoPrecio() {
        let precioFinal = (this._PrecioBase + this._GHz*10)*1.21
        console.log("Precio: "+precioFinal)
        return precioFinal
    }
}