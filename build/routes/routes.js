"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const clientes_1 = require("../model/clientes");
const database_1 = require("../database/database");
let dSchemaCliente = {
    _id: null,
    _nombreCliente: null,
    _posicion: null
};
class DatoRoutes {
    constructor() {
        this.addClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const { id, nombre, posicion } = req.body;
                dSchemaCliente = {
                    _id: id,
                    _nombreCliente: nombre,
                    _posicion: posicion
                };
                const oSchema = new clientes_1.ClienteDB(dSchemaCliente);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const valor = req.params.id;
                console.log(mensaje);
                const query = yield clientes_1.ClienteDB.findOne({ _id: valor });
                res.json(query);
            }))
                // Testeo
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield clientes_1.ClienteDB.find({});
                res.json(query);
            }))
                // Testeo
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/Clientes/get', this.getClientes);
        this._router.post('/Clientes/add', this.addClientes);
        this._router.get('/Clientes/search/:id', this.searchClientes);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
