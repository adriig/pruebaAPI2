import {Request, Response, Router } from 'express'
import { ClienteDB, iCliente } from '../model/clientes'
import { EmpleadoDB, iEmpleado, iMozo, iRepartidor } from '../model/empleados'
import { db } from '../database/database'
import { ProductoDB, iProducto, iMovil, iProcesador, iRopa, iProducto2 } from '../model/productos'
import { AlmacenesDB, iAlmacen } from '../model/almacenes'
import { Producto } from '../classes/productos/producto'
import { Movil } from '../classes/productos/movil'
import { procesador } from '../classes/productos/procesador'
import { Ropa } from '../classes/productos/ropa'

let dSchemaCliente: iCliente = {
    _id: null,
    _nombreCliente: null,
    _posicion: null
}

let dSchemaEmp: iEmpleado = {
    _id: null,
    _Tipo: null,
    _Nombre: null,
    _Antiguedad: null,
    _JornadaCompl: null,
}

let dSchemaRep: iRepartidor = {
    _id: null,
    _Tipo: null,
    _Nombre: null,
    _Antiguedad: null,
    _JornadaCompl: null,
    _Experiencia: null,
    _Repartos: null
}

let dSchemaMozo: iMozo = {
    _id: null,
    _Tipo: null,
    _Nombre: null,
    _Antiguedad: null,
    _JornadaCompl: null,
    _IdAlmacen: null
}

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

let dSchemaAlmacen: iAlmacen = {
    _id: null,
    _Posicion: null,
    _CapacidadMax: null,
    _Mozos: null,
    _Repartidores: null
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
     * Rutas para Aplicación CRUD de Clientes.
     * 
     */

    private addClientes = async (req: Request, res: Response) => {
        const {id, nombre, posicion} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
          dSchemaCliente = {
              _id: id,
              _nombreCliente: nombre,
              _posicion: posicion
          }
          const oSchema = new ClienteDB(dSchemaCliente)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private searchClientes = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            const valor = req.params.id
            console.log(mensaje)
            const query  = await ClienteDB.findOne({_id: valor})
            res.json(query)
        })
        // Testeo
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getClientes = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await ClienteDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteClientes = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await ClienteDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    /**
     * 
     * Rutas para Aplicación CRUD de Empleados.
     * 
     */

    private addEmp = async (req: Request, res: Response) => {
        const {id, tipo, nombre, antiguedad, jornada} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
          dSchemaEmp = {
              _id: id,
              _Tipo: tipo,
              _Nombre: nombre,
              _Antiguedad: antiguedad,
              _JornadaCompl: jornada
          }
          const oSchema = new EmpleadoDB(dSchemaEmp)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addRep = async (req: Request, res: Response) => {
        const {id, tipo, nombre, antiguedad, jornada, experiencia, repartos} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaRep = {
                _id: id,
                _Tipo: tipo,
                _Nombre: nombre,
                _Antiguedad: antiguedad,
                _JornadaCompl: jornada,
                _Experiencia: experiencia,
                _Repartos: repartos
          }
          const oSchema = new EmpleadoDB(dSchemaRep)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addMozo = async (req: Request, res: Response) => {
        const {id, tipo, nombre, antiguedad, jornada, almacen} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaMozo = {
                _id: id,
                _Tipo: tipo,
                _Nombre: nombre,
                _Antiguedad: antiguedad,
                _JornadaCompl: jornada,
                _IdAlmacen: almacen
          }
          const oSchema = new EmpleadoDB(dSchemaMozo)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private searchEmp = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            const valor = req.params.id
            console.log(mensaje)
            const query  = await EmpleadoDB.findOne({_id: valor})
            res.json(query)
        })
        // Testeo
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getEmp = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await EmpleadoDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteEmp = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await EmpleadoDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
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
        const {id, nombre, categoria, precio, nota, almacenamiento, talla} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaRopa = {
                _id: id,
                _NombreProducto: nombre,
                _CategoriaProducto: categoria,
                _PrecioBase: precio,
                _NotaMedia: nota,
                _Almacenamiento: almacenamiento,
                _Talla: talla
          }
          const oSchema = new ProductoDB(dSchemaRopa)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addMovil = async (req: Request, res: Response) => {
        const {id, nombre, categoria, precio, nota, almacenamiento, GBRam, Megapixeles} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaMovil = {
                _id: id,
                _NombreProducto: nombre,
                _CategoriaProducto: categoria,
                _PrecioBase: precio,
                _NotaMedia: nota,
                _Almacenamiento: almacenamiento,
                _GBRam: GBRam,
                _Megapixeles: Megapixeles
          }
          const oSchema = new ProductoDB(dSchemaMovil)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addProcesador = async (req: Request, res: Response) => {
        const {id, nombre, categoria, precio, nota, almacenamiento, GHz} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaProcesador = {
                _id: id,
                _NombreProducto: nombre,
                _CategoriaProducto: categoria,
                _PrecioBase: precio,
                _NotaMedia: nota,
                _Almacenamiento: almacenamiento,
                _GHz: GHz
          }
          const oSchema = new ProductoDB(dSchemaProcesador)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }


    /**
     * 
     * Rutas para Aplicación CRUD de Productos.
     * 
    */

     private getAlmacen = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await AlmacenesDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private searchAlmacen = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await AlmacenesDB.findOne({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addAlmacen = async (req: Request, res: Response) => {
        const {id, posicion, capacidadMax, mozos, repartidores} = req.body
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaAlmacen = {
                _id: id,
                _Posicion: posicion,
                _CapacidadMax: capacidadMax,
                _Mozos: mozos,
                _Repartidores: repartidores
          }
          const oSchema = new ProductoDB(dSchemaProducto)
          await oSchema.save()
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteAlmacen = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await AlmacenesDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }


    misRutas(){
        this._router.get('/Clientes/get', this.getClientes)
        this._router.post('/Clientes/add', this.addClientes)
        this._router.get('/Clientes/search/:id', this.searchClientes)
        this._router.get('/Clientes/delete/:id', this.deleteClientes)

        this._router.post('/Empleados/addEmp', this.addEmp)
        this._router.post('/Empleados/addRep', this.addRep)
        this._router.post('/Empleados/addMozo', this.addMozo)
        this._router.get('/Empleados/get', this.getEmp)
        this._router.get('/Empleados/search/:id', this.searchEmp)
        this._router.get('/Empleados/delete/:id', this.deleteEmp)
    
        this._router.get('/Productos/get', this.getProd)
        this._router.get('/Productos/precios', this.getPrecios)
        this._router.post('/Productos/add', this.addProd)
        this._router.post('/Productos/ropa/add', this.addRopa)
        this._router.post('/Productos/movil/add', this.addMovil)
        this._router.post('/Productos/procesador/add', this.addProcesador)
        this._router.get('/Productos/search/:id', this.searchProd)
        this._router.get('/Productos/prueba', this.prueba)
        this._router.delete('/Productos/delete/:id', this.deleteProd)

        this._router.get('/Almacenes/get', this.getAlmacen)
        this._router.post('/Almacenes/add', this.addAlmacen)
        this._router.get('/Almacenes/search/:id', this.searchAlmacen)
        this._router.get('/Almacenes/delete/:id', this.deleteAlmacen)
    }
}
const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
