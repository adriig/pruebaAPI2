"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const clientesScema = new mongoose_1.Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _nombreClient: {
        type: String
    },
    _posicion: {
        type: Number
    }
});
// La colección de la BD (Plural siempre)
exports.ClienteDB = (0, mongoose_1.model)('clientes', clientesScema);
