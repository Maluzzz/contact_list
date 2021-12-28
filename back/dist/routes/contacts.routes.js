"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacts_controller_1 = require("../controllers/contacts.controller");
const router = (0, express_1.Router)();
router.get('/', contacts_controller_1.getContacts);
router.get('/:id', contacts_controller_1.getContact);
router.put('/:id', contacts_controller_1.putContact);
router.post('/', contacts_controller_1.postContact);
router.delete('/:id', contacts_controller_1.deleteContact);
exports.default = router;
//# sourceMappingURL=contacts.routes.js.map