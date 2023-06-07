import {Request,Response} from "express";
import MotoService from "../services/motoService";


class motoController {

    constructor() {
    }
    showMoto = async (req:Request,res:Response) => {
        const listMoto = await MotoService.showAll();
        res.status(200).json(listMoto)
    }
    addMoto = async (req:Request,res:Response) => {
         const product = req.body;
         await MotoService.addMoto(product)
        res.status(200).json('ok')
    }
    editMoto = async (req:Request,res:Response) => {
        const id = req.params.id;
        console.log(id)
        const Moto = req.body;
        console.log(Moto)
        await MotoService.editMoto(id,Moto);
        res.status(200).json('ok')
    }
    removeMoto = async (req:Request,res:Response) => {
        const id = req.params.id;
        await MotoService.removeMoto(id)
        res.status(200).json('ok')
    }
    findByNameMoto = async (req: Request, res: Response) => {
        let name = req.query.name;
        let response = await MotoService.findByNameMoto(name);
        res.status(200).json(response)
    }
}
export default new motoController()