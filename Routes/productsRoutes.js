import express from "express";
import { CreatProduct } from "../Controllers/productsController.js";

const router = express.Router();
router.post('/', CreatProduct);



export default router;
