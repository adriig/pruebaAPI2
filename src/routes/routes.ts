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

    private addEmp = async (req: Request, res: Response) => {
        const {id, nombre, posicion} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
          dSchemaCliente = {
              _id: id,
              _nombreCliente: nombre,
              _posicion: posicion
          }
          const oSchema = new EmpleadoDB(dSchemaCliente)
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
            const query  = await ClienteDB.findOne({_id: valor})
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
            const query  = await ClienteDB.find({})
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
            const query  = await ClienteDB.findOneAndDelete({_id: valor})
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
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
