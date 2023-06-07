"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motoController_1 = __importDefault(require("../controllers/motoController"));
const motoRouter = (0, express_1.default)();
motoRouter.get('/', motoController_1.default.showMoto);
motoRouter.post('/', motoController_1.default.addMoto);
motoRouter.delete('/:id', motoController_1.default.removeMoto);
motoRouter.put('/:id', motoController_1.default.editMoto);
motoRouter.get('/name', motoController_1.default.findByNameMoto);
exports.default = motoRouter;
//# sourceMappingURL=motoRouter.js.map