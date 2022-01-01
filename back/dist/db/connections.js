"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const dbName = ((_a = dotenv_1.default.config().parsed) === null || _a === void 0 ? void 0 : _a.DATABASE_NAME) || '';
const dbUser = ((_b = dotenv_1.default.config().parsed) === null || _b === void 0 ? void 0 : _b.DATABASE_USERNAME) || '';
const dbPass = ((_c = dotenv_1.default.config().parsed) === null || _c === void 0 ? void 0 : _c.DATABASE_PASSWORD) || '';
const dbHost = ((_d = dotenv_1.default.config().parsed) === null || _d === void 0 ? void 0 : _d.DATABASE_HOST) || '';
const db = new sequelize_1.Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mariadb'
});
exports.default = db;
//# sourceMappingURL=connections.js.map