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
const empleados_1 = require("../model/empleados");
const database_1 = require("../database/database");
let dSchemaCliente = {
    _id: null,
    _nombreCliente: null,
    _posicion: null
};
let dSchemaEmp = {
    _id: null,
    _Tipo: null,
    _Nombre: null,
    _Antiguedad: null,
    _JornadaCompl: null,
};
let dSchemaRep = {
    _id: null,
    _Tipo: null,
    _Nombre: null,
    _Antiguedad: null,
    _JornadaCompl: null,
    _Experiencia: null,
    _Repartos: null
};
let dSchemaMozo = {
    _id: null,
    _Tipo: null,
    _Nombre: null,
    _Antiguedad: null,
    _JornadaCompl: null,
    _IdAlmacen: null
};
class DatoRoutes {
    constructor() {
        /**
         *
         * Rutas para Aplicación CRUD de Clientes.
         *
         */
        this.addClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, nombre, posicion } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
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
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield clientes_1.ClienteDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        /**
         *
         * Rutas para Aplicación CRUD de Empleados.
         *
         */
        this.addEmp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, tipo, nombre, antiguedad, jornada } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaEmp = {
                    _id: id,
                    _Tipo: tipo,
                    _Nombre: nombre,
                    _Antiguedad: antiguedad,
                    _JornadaCompl: jornada
                };
                const oSchema = new empleados_1.EmpleadoDB(dSchemaEmp);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addRep = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, tipo, nombre, antiguedad, jornada, experiencia, repartos } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaRep = {
                    _id: id,
                    _Tipo: tipo,
                    _Nombre: nombre,
                    _Antiguedad: antiguedad,
                    _JornadaCompl: jornada,
                    _Experiencia: experiencia,
                    _Repartos: repartos
                };
                const oSchema = new empleados_1.EmpleadoDB(dSchemaRep);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addMozo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, tipo, nombre, antiguedad, jornada, almacen } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaMozo = {
                    _id: id,
                    _Tipo: tipo,
                    _Nombre: nombre,
                    _Antiguedad: antiguedad,
                    _JornadaCompl: jornada,
                    _IdAlmacen: almacen
                };
                const oSchema = new empleados_1.EmpleadoDB(dSchemaMozo);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchEmp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const valor = req.params.id;
                console.log(mensaje);
                const query = yield empleados_1.EmpleadoDB.findOne({ _id: valor });
                res.json(query);
            }))
                // Testeo
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getEmp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield empleados_1.EmpleadoDB.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteEmp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield empleados_1.EmpleadoDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
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
        this._router.get('/Clientes/delete/:id', this.deleteClientes);
        this._router.post('/Empleados/addEmp', this.addEmp);
        this._router.post('/Empleados/addRep', this.addRep);
        this._router.post('/Empleados/addMozo', this.addMozo);
        this._router.get('/Empleados/get', this.getEmp);
        this._router.get('/Empleados/search/:id', this.searchEmp);
        this._router.get('/Empleados/delete/:id', this.deleteEmp);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
