import Router from "express";
import motoController from "../controllers/motoController";

const motoRouter = Router();

// productRouter.use(auth);
motoRouter.get('/',motoController.showMoto);
motoRouter.post('/',motoController.addMoto);
motoRouter.delete('/:id',motoController.removeMoto);
motoRouter.put('/:id',motoController.editMoto);
motoRouter.get('/name', motoController.findByNameMoto)
export default motoRouter;