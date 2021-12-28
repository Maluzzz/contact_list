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
exports.deleteContact = exports.putContact = exports.postContact = exports.getContact = exports.getContacts = void 0;
const contact_1 = __importDefault(require("../models/contact"));
const history_1 = __importDefault(require("../models/history"));
const getContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield contact_1.default.findAll();
    res.json(contacts);
});
exports.getContacts = getContacts;
const getContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const contact = yield contact_1.default.findByPk(id);
    if (contact) {
        res.json(contact);
    }
    else {
        res.status(404).json({
            error: `No User with the id: ${id}`
        });
    }
});
exports.getContact = getContact;
const postContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const emailExisted = yield contact_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (emailExisted) {
            return res.status(400).json({
                error: `Contact ${body.email} Already Exist`
            });
        }
        const contact = new contact_1.default(body);
        yield contact.save();
        res.json(contact);
    }
    catch (error) {
        res.status(500).json({
            error: 'Server internal Error'
        });
    }
});
exports.postContact = postContact;
const putContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const contact = yield contact_1.default.findByPk(id);
        const history = new history_1.default(Object.assign(Object.assign({}, body), { 'id_contact': parseInt(id) }));
        if (!contact) {
            return res.status(400).json({
                error: `Contact with ${id} doesn't Exist`
            });
        }
        yield contact.update(body);
        history.save();
        res.json(contact);
    }
    catch (error) {
        res.status(500).json({
            error: 'Server internal Error'
        });
    }
});
exports.putContact = putContact;
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const contact = yield contact_1.default.findByPk(id);
        if (!contact) {
            return res.status(400).json({
                error: `Contact with ${id} doesn't Exist`
            });
        }
        yield contact.destroy();
        yield history_1.default.destroy({
            where: {
                id_contact: id
            }
        });
        res.json({
            success: 'Removed success'
        });
    }
    catch (error) {
        res.status(500).json({
            error: 'Server internal Error'
        });
    }
});
exports.deleteContact = deleteContact;
//# sourceMappingURL=contacts.controller.js.map