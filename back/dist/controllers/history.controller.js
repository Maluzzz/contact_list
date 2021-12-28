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
exports.getHistory = void 0;
const history_1 = __importDefault(require("../models/history"));
const getHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const history = yield history_1.default.findAll({
        where: {
            id_contact: id
        }
    });
    if (history) {
        res.json(history);
    }
    else {
        res.status(404).json({
            error: `No history with the id: ${id}`
        });
    }
});
exports.getHistory = getHistory;
//# sourceMappingURL=history.controller.js.map