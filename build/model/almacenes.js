"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlmacenesDB = void 0;
const mongoose_1 = require("mongoose");
//import { MozoAlmacenObj } from "../classes/trabajadores/mozoAlmacen";
// Definimos el Schema
const almacenesSchema = new mongoose_1.Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _Posicion: {
        type: Number
    },
    _CapacidadMax: {
        type: Number
    },
    _Mozos: {
        type: Array
    }
});
// La colección de la BD (Plural siempre)
exports.AlmacenesDB = (0, mongoose_1.model)('almacenes', almacenesSchema);
