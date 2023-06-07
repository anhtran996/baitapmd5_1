import {Moto} from "../entities/moto";
import {AppDataSource} from "../data-source";
import { Like } from "typeorm";


class MotoService {
    private motoRepository;

    constructor() {
        this.motoRepository = AppDataSource.getRepository(Moto)
    }

    showAll = async () => {
        const listMoto = await this.motoRepository.find({
            relations: {
            },
        });
        return listMoto
    }
    addMoto = async (Moto) => {
        await this.motoRepository.save(Moto);
    }
    editMoto = async (id, Moto) => {
        await this.motoRepository.update(
            {id}, {
                name: Moto.name, price: Moto.price, displacementVehicle: Moto.displacementVehicle,
                discription: Moto.discription
            });
    }
    removeMoto = async (id) => {
        await this.motoRepository.delete({id});
    }
    // findById = async (id) => {
    //     return await this.motoRepository.findOne({
    //         where: {id: id},
    //         relations: {
    //             category: true,
    //         }
    //     })
    // }  
    findByNameMoto = async (name) => {
        const moto = await this.motoRepository.find({
            where: {
                name: Like(`%${name}%`),
            },
        });
        return moto
       
    }
}

export default new MotoService();