import {Router} from "express";
import motoRouter from "./motoRouter";


const router = Router();
router.use('/moto', motoRouter);


export default router; 