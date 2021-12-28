"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const History = connections_1.default.define('change_histories', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    surname: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    id_contact: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
exports.default = History;
//# sourceMappingURL=history.js.map