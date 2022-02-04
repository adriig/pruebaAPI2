import {Request, Response, Router } from 'express'
import { ClienteDB, iCliente } from '../model/clientes'
import { EmpleadoDB, iEmpleado, iMozo, iRepartidor } from '../model/empleados'
import { db } from '../database/database'

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
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
