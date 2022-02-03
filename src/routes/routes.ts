import {Request, Response, Router } from 'express'
import { ClienteDB, iCliente } from '../model/clientes'
import { db } from '../database/database'

let dSchemaCliente: iCliente = {
    _id: null,
    _nombreCliente: null,
    _posicion: null
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
        await db.conectarBD()
        .then( async (mensaje) => {
          const {id, nombre, posicion} = req.body
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
        // Testeo
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    misRutas(){
        this._router.get('/Clientes/get', this.getClientes)
        this._router.post('/Clientes/add', this.addClientes)
        this._router.get('/Clientes/search/:id', this.searchClientes)
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
