import {Request, Response, Router } from 'express'
import { db } from '../database/database'
import { ProductoDB, iProducto, iMovil, iProcesador, iRopa, iProducto2 } from '../model/productos'
import { Producto } from '../classes/productos/producto'
import { Movil } from '../classes/productos/movil'
import { procesador } from '../classes/productos/procesador'
import { Ropa } from '../classes/productos/ropa'
import { iUsers, UsersDB } from '../model/usuarios'


let dSchemaProducto : iProducto = {
    _id: null,
    _NombreProducto: null,
    _CategoriaProducto: null,
    _PrecioBase: null,
    _NotaMedia: null,
    _Almacenamiento: null
}

let dSchemaRopa : iRopa = {
    _id: null,
    _NombreProducto: null,
    _CategoriaProducto: null,
    _PrecioBase: null,
    _NotaMedia: null,
    _Almacenamiento: null,
    _Talla: null,
}

let dSchemaMovil: iMovil = {
    _id: null,
    _NombreProducto: null,
    _CategoriaProducto: null,
    _PrecioBase: null,
    _NotaMedia: null,
    _Almacenamiento: null,
    _GBRam: null,
    _Megapixeles: null,
}

let dSchemaProcesador: iProcesador = {
    _id: null,
    _NombreProducto: null,
    _CategoriaProducto: null,
    _PrecioBase: null,
    _NotaMedia: null,
    _Almacenamiento: null,
    _GHz: null
}

let dSchemaUser: iUsers = {
    _id: null,
    _Nombre: null,
    _Contraseña: null,
    _Tipo: null
}

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }


    /**
     * 
     * Rutas para Aplicación CRUD de Productos.
     * 
    */

    private getProd = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await ProductoDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getPrecios = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            let dProducto: iProducto2
            const query  = await ProductoDB.find({})
            let query2: Array<iProducto2> = []
            for(dProducto of query) {
               let miProducto
               if(dProducto._CategoriaProducto == "Movil") {
                    miProducto = new Movil(dProducto._id, dProducto._NombreProducto, dProducto._CategoriaProducto, dProducto._PrecioBase, dProducto._NotaMedia, dProducto._Almacenamiento, dProducto._GBRam, dProducto._Megapixeles)
                } else if (dProducto._CategoriaProducto == "Procesador") {
                    miProducto = new procesador(dProducto._id, dProducto._NombreProducto, dProducto._CategoriaProducto, dProducto._PrecioBase, dProducto._NotaMedia, dProducto._Almacenamiento, dProducto._GHz)
                } else if (dProducto._CategoriaProducto == "Ropa") {
                    miProducto = new Ropa(dProducto._id, dProducto._NombreProducto, dProducto._CategoriaProducto, dProducto._PrecioBase, dProducto._NotaMedia, dProducto._Almacenamiento, dProducto._Talla)
                } else {
                    miProducto = new Producto(dProducto._id, dProducto._NombreProducto, dProducto._CategoriaProducto, dProducto._PrecioBase, dProducto._NotaMedia, dProducto._Almacenamiento)
                }
                let coste = miProducto.calculoPrecio() 
               dProducto._PrecioBase=coste
               query2.push(dProducto)
                //Producto._PrecioBase= miProducto.calculoPrecio()
                //console.log(Producto._PrecioBase)
            }
            res.json(query2)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private searchProd = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await ProductoDB.findOne({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteProd = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await ProductoDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private prueba = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await ProductoDB.findOneAndDelete({_id: 36})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addProd = async (req: Request, res: Response) => {
        const {_id, _NombreProducto, _CategoriaProducto, _PrecioBase, _NotaMedia, _Almacenamiento} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaProducto = {
                _id: _id,
                _NombreProducto: _NombreProducto,
                _CategoriaProducto: _CategoriaProducto,
                _PrecioBase: _PrecioBase,
                _NotaMedia: _NotaMedia,
                _Almacenamiento: _Almacenamiento
          }
          const oSchema = new ProductoDB(dSchemaProducto)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addRopa = async (req: Request, res: Response) => {
        const {_id, _NombreProducto, _CategoriaProducto, _PrecioBase, _NotaMedia, _Almacenamiento, _Talla} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaRopa = {
                _id: _id,
                _NombreProducto: _NombreProducto,
                _CategoriaProducto: _CategoriaProducto,
                _PrecioBase: _PrecioBase,
                _NotaMedia: _NotaMedia,
                _Almacenamiento: _Almacenamiento,
                _Talla: _Talla
          }
          const oSchema = new ProductoDB(dSchemaRopa)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addMovil = async (req: Request, res: Response) => {
        const {_id, _NombreProducto, _CategoriaProducto, _PrecioBase, _NotaMedia, _Almacenamiento, _GBRam, _Megapixeles} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaMovil = {
                _id: _id,
                _NombreProducto: _NombreProducto,
                _CategoriaProducto: _CategoriaProducto,
                _PrecioBase: _PrecioBase,
                _NotaMedia: _NotaMedia,
                _Almacenamiento: _Almacenamiento,
                _GBRam: _GBRam,
                _Megapixeles: _Megapixeles
          }
          const oSchema = new ProductoDB(dSchemaMovil)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addUsers = async (req: Request, res: Response) => {
        const {_id, _Nombre, _Contraseña, _Tipo} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaUser = {
                _id: _id,
                _Nombre: _Nombre,
                _Contraseña: _Contraseña,
                _Tipo: _Tipo,
          }
          const oSchema = new ProductoDB(dSchemaUser)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private searchUsers = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await UsersDB.findOne({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteUsers = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await UsersDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private listUsers = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await UsersDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addProcesador = async (req: Request, res: Response) => {
        const {_id, _NombreProducto, _CategoriaProducto, _PrecioBase, _NotaMedia, _Almacenamiento, _GHz} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaProcesador = {
                _id: _id,
                _NombreProducto: _NombreProducto,
                _CategoriaProducto: _CategoriaProducto,
                _PrecioBase: _PrecioBase,
                _NotaMedia: _NotaMedia,
                _Almacenamiento: _Almacenamiento,
                _GHz: _GHz
          }
          const oSchema = new ProductoDB(dSchemaProcesador)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }



    misRutas(){   
        this._router.get('/Productos/get', this.getProd)
        this._router.get('/Productos/precios', this.getPrecios)
        this._router.post('/Productos/add', this.addProd)
        this._router.post('/Productos/ropa/add', this.addRopa)
        this._router.post('/Productos/movil/add', this.addMovil)
        this._router.post('/Productos/procesador/add', this.addProcesador)
        this._router.get('/Productos/search/:id', this.searchProd)
        this._router.get('/Productos/prueba', this.prueba)
        this._router.delete('/Productos/delete/:id', this.deleteProd)

        this._router.post('/Users/add', this.addUsers)
        this._router.get('/Users/search/:id', this.addUsers)
        this._router.delete('/Users/delete', this.deleteUsers)
        this._router.get('/Users/list', this.listUsers)
    }
}
const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
