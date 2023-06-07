"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moto_1 = require("../entities/moto");
const data_source_1 = require("../data-source");
const typeorm_1 = require("typeorm");
class MotoService {
    constructor() {
        this.showAll = async () => {
            const listMoto = await this.motoRepository.find({
                relations: {},
            });
            return listMoto;
        };
        this.addMoto = async (Moto) => {
            await this.motoRepository.save(Moto);
        };
        this.editMoto = async (id, Moto) => {
            await this.motoRepository.update({ id }, {
                name: Moto.name, price: Moto.price, displacementVehicle: Moto.displacementVehicle,
                discription: Moto.discription
            });
        };
        this.removeMoto = async (id) => {
            await this.motoRepository.delete({ id });
        };
        this.findByNameMoto = async (name) => {
            const moto = await this.motoRepository.find({
                where: {
                    name: (0, typeorm_1.Like)(`%${name}%`),
                },
            });
            return moto;
        };
        this.motoRepository = data_source_1.AppDataSource.getRepository(moto_1.Moto);
    }
}
exports.default = new MotoService();
//# sourceMappingURL=motoService.js.map