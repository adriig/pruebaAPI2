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

    private addClientes = async (req: Request, res: Response) => {
        
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
        this._router.get('/Clientes/add/:id/:nombre/:posicion', this.addClientes)
        this._router.get('/Clientes/search/:id', this.searchClientes)
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
