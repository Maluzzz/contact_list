"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pg = __importStar(require("pg"));
const db = new sequelize_1.Sequelize('db4ssjebp0ok5k', 'rhkvtuumiuatim', '1df9f105024b8782e929f523cf8d567b41a420ddbcd99a94830a697227978395', {
    host: 'ec2-3-213-76-170.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
exports.default = db;
//# sourceMappingURL=connections.js.map