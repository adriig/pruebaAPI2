export class Producto {
    public _id: number;
    public _NombreProducto: string;
    public _CategoriaProducto: string;
    public _PrecioBase: number;
    public _NotaMedia: number;
    public _Almacenamiento: [];

    public constructor(id: number, nombre: string, categoria: string, precio: number, notaMedia: number, almacenamiento: [] ){
        this._id=id;
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._PrecioBase = precio;
        this._NotaMedia = notaMedia
        this._Almacenamiento = almacenamiento
    }

    todo() {
        return `IdProducto: ${this._id} \n
                Nombre: ${this._NombreProducto} \n
                Categoria: ${this._CategoriaProducto} \n
                Precio Base: ${this._PrecioBase} \n
                Nota Media: ${this._NotaMedia} \n
                Almacenado en: ${this._Almacenamiento} `
    }
    calculoPrecio() {
        let precioFinal = this._PrecioBase * 1.21
        console.log("Precio: "+precioFinal)
        return precioFinal
    }
}