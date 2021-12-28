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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contacts_routes_1 = __importDefault(require("../routes/contacts.routes"));
const history_routes_1 = __importDefault(require("../routes/history.routes"));
const connections_1 = __importDefault(require("../db/connections"));
class Server {
    constructor() {
        this.paths = {
            contacts: '/api/contacts',
            history: '/api/history'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.dbConection();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    dbConection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connections_1.default.authenticate();
                console.log('Database Connected');
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    routes() {
        this.app.use(this.paths.contacts, contacts_routes_1.default);
        this.app.use(this.paths.history, history_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map