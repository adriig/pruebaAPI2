export class Movil {
    public _id: number;
    public _NombreProducto: string;
    public _CategoriaProducto: string;
    public _PrecioBase: number;
    public _NotaMedia: number;
    public _Almacenamiento: [];
    public _GBRam: number;
    public _Megapixeles: number;

    public constructor(id: number, nombre: string, categoria: string, precio: number, notaMedia: number, almacenamiento: [],  GBRam: number, Megapixeles: number ){
        this._id=id;
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._PrecioBase = precio;
        this._NotaMedia = notaMedia
        this._Almacenamiento = almacenamiento
        this._GBRam = GBRam;
        this._Megapixeles=Megapixeles
    }
    calculoPrecio() {
        let precioFinal = (this._PrecioBase + this._GBRam*5 + (this._Megapixeles)*2)*1.21
        return precioFinal
    }
}