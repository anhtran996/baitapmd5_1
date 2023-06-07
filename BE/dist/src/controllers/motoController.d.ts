import { Request, Response } from "express";
declare class motoController {
    constructor();
    showMoto: (req: Request, res: Response) => Promise<void>;
    addMoto: (req: Request, res: Response) => Promise<void>;
    editMoto: (req: Request, res: Response) => Promise<void>;
    removeMoto: (req: Request, res: Response) => Promise<void>;
    findByNameMoto: (req: Request, res: Response) => Promise<void>;
}
declare const _default: motoController;
export default _default;
