import {Request, Response, Router } from 'express'
import { ClienteDB } from '../model/clientes'
import { db } from '../database/database'

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
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

        db.desconectarBD()
    }

    misRutas(){
        this._router.get('/clientes', this.getClientes)
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
