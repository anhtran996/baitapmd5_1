"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const motoRouter_1 = __importDefault(require("./motoRouter"));
const router = (0, express_1.Router)();
router.use('/moto', motoRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map