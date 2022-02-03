"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const empleadosSchema = new mongoose_1.Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _Tipo: {
        type: String
    },
    _Nombre: {
        type: String
    },
    _Antiguedad: {
        type: Number
    },
    _JornadaCompl: {
        type: Boolean
    },
    _IdAlmacen: {
        type: Number
    },
    _Experiencia: {
        type: Number
    },
    _Repartos: {
        type: Number
    },
});
// La colección de la BD (Plural siempre)
exports.EmpleadoDB = (0, mongoose_1.model)('empleados', empleadosSchema);
