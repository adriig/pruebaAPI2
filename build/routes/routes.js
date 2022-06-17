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
const database_1 = require("../database/database");
const productos_1 = require("../model/productos");
const producto_1 = require("../classes/productos/producto");
const movil_1 = require("../classes/productos/movil");
const procesador_1 = require("../classes/productos/procesador");
const ropa_1 = require("../classes/productos/ropa");
const usuarios_1 = require("../model/usuarios");
let dSchemaProducto = {
    _id: null,
    _NombreProducto: null,
    _CategoriaProducto: null,
    _PrecioBase: null,
    _NotaMedia: null,
    _Almacenamiento: null
};
let dSchemaRopa = {
    _id: null,
    _NombreProducto: null,
    _CategoriaProducto: null,
    _PrecioBase: null,
    _NotaMedia: null,
    _Almacenamiento: null,
    _Talla: null,
};
let dSchemaMovil = {
    _id: null,
    _NombreProducto: null,
    _CategoriaProducto: null,
    _PrecioBase: null,
    _NotaMedia: null,
    _Almacenamiento: null,
    _GBRam: null,
    _Megapixeles: null,
};
let dSchemaProcesador = {
    _id: null,
    _NombreProducto: null,
    _CategoriaProducto: null,
    _PrecioBase: null,
    _NotaMedia: null,
    _Almacenamiento: null,
    _GHz: null
};
class DatoRoutes {
    constructor() {
        /**
         *
         * Rutas para Aplicación CRUD de Productos.
         *
        */
        this.getProd = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield productos_1.ProductoDB.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getPrecios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                let dProducto;
                const query = yield productos_1.ProductoDB.find({});
                let query2 = [];
                for (dProducto of query) {
                    let miProducto;
                    if (dProducto._CategoriaProducto == "Movil") {
                        miProducto = new movil_1.Movil(dProducto._id, dProducto._NombreProducto, dProducto._CategoriaProducto, dProducto._PrecioBase, dProducto._NotaMedia, dProducto._Almacenamiento, dProducto._GBRam, dProducto._Megapixeles);
                    }
                    else if (dProducto._CategoriaProducto == "Procesador") {
                        miProducto = new procesador_1.procesador(dProducto._id, dProducto._NombreProducto, dProducto._CategoriaProducto, dProducto._PrecioBase, dProducto._NotaMedia, dProducto._Almacenamiento, dProducto._GHz);
                    }
                    else if (dProducto._CategoriaProducto == "Ropa") {
                        miProducto = new ropa_1.Ropa(dProducto._id, dProducto._NombreProducto, dProducto._CategoriaProducto, dProducto._PrecioBase, dProducto._NotaMedia, dProducto._Almacenamiento, dProducto._Talla);
                    }
                    else {
                        miProducto = new producto_1.Producto(dProducto._id, dProducto._NombreProducto, dProducto._CategoriaProducto, dProducto._PrecioBase, dProducto._NotaMedia, dProducto._Almacenamiento);
                    }
                    let coste = miProducto.calculoPrecio();
                    dProducto._PrecioBase = coste;
                    query2.push(dProducto);
                    //Producto._PrecioBase= miProducto.calculoPrecio()
                    //console.log(Producto._PrecioBase)
                }
                res.json(query2);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchProd = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield productos_1.ProductoDB.findOne({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteProd = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield productos_1.ProductoDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.prueba = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield productos_1.ProductoDB.findOneAndDelete({ _id: 36 });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addProd = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _NombreProducto, _CategoriaProducto, _PrecioBase, _NotaMedia, _Almacenamiento } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaProducto = {
                    _id: _id,
                    _NombreProducto: _NombreProducto,
                    _CategoriaProducto: _CategoriaProducto,
                    _PrecioBase: _PrecioBase,
                    _NotaMedia: _NotaMedia,
                    _Almacenamiento: _Almacenamiento
                };
                const oSchema = new productos_1.ProductoDB(dSchemaProducto);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addRopa = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _NombreProducto, _CategoriaProducto, _PrecioBase, _NotaMedia, _Almacenamiento, _Talla } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaRopa = {
                    _id: _id,
                    _NombreProducto: _NombreProducto,
                    _CategoriaProducto: _CategoriaProducto,
                    _PrecioBase: _PrecioBase,
                    _NotaMedia: _NotaMedia,
                    _Almacenamiento: _Almacenamiento,
                    _Talla: _Talla
                };
                const oSchema = new productos_1.ProductoDB(dSchemaRopa);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addMovil = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _NombreProducto, _CategoriaProducto, _PrecioBase, _NotaMedia, _Almacenamiento, _GBRam, _Megapixeles } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaMovil = {
                    _id: _id,
                    _NombreProducto: _NombreProducto,
                    _CategoriaProducto: _CategoriaProducto,
                    _PrecioBase: _PrecioBase,
                    _NotaMedia: _NotaMedia,
                    _Almacenamiento: _Almacenamiento,
                    _GBRam: _GBRam,
                    _Megapixeles: _Megapixeles
                };
                const oSchema = new productos_1.ProductoDB(dSchemaMovil);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield usuarios_1.UsersDB.findOne({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield usuarios_1.UsersDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.listUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield usuarios_1.UsersDB.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addProcesador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _NombreProducto, _CategoriaProducto, _PrecioBase, _NotaMedia, _Almacenamiento, _GHz } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaProcesador = {
                    _id: _id,
                    _NombreProducto: _NombreProducto,
                    _CategoriaProducto: _CategoriaProducto,
                    _PrecioBase: _PrecioBase,
                    _NotaMedia: _NotaMedia,
                    _Almacenamiento: _Almacenamiento,
                    _GHz: _GHz
                };
                const oSchema = new productos_1.ProductoDB(dSchemaProcesador);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/Productos/get', this.getProd);
        this._router.get('/Productos/precios', this.getPrecios);
        this._router.post('/Productos/add', this.addProd);
        this._router.post('/Productos/ropa/add', this.addRopa);
        this._router.post('/Productos/movil/add', this.addMovil);
        this._router.post('/Productos/procesador/add', this.addProcesador);
        this._router.get('/Productos/search/:id', this.searchProd);
        this._router.get('/Productos/prueba', this.prueba);
        this._router.delete('/Productos/delete/:id', this.deleteProd);
        this._router.delete('/Users/delete', this.deleteUsers);
        this._router.get('/Users/list', this.listUsers);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
