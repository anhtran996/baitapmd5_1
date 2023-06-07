"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const motoService_1 = __importDefault(require("../services/motoService"));
class motoController {
    constructor() {
        this.showMoto = async (req, res) => {
            const listMoto = await motoService_1.default.showAll();
            res.status(200).json(listMoto);
        };
        this.addMoto = async (req, res) => {
            const product = req.body;
            await motoService_1.default.addMoto(product);
            res.status(200).json('ok');
        };
        this.editMoto = async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const Moto = req.body;
            console.log(Moto);
            await motoService_1.default.editMoto(id, Moto);
            res.status(200).json('ok');
        };
        this.removeMoto = async (req, res) => {
            const id = req.params.id;
            await motoService_1.default.removeMoto(id);
            res.status(200).json('ok');
        };
        this.findByNameMoto = async (req, res) => {
            let name = req.query.name;
            let response = await motoService_1.default.findByNameMoto(name);
            res.status(200).json(response);
        };
    }
}
exports.default = new motoController();
//# sourceMappingURL=motoController.js.map