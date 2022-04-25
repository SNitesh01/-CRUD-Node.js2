import express from "express";
import { creatUser, deleteuser, getUser, getUserbyid, updateUser } from "../Controllers/UserController.js";

const router = express.Router();
router.post('/', creatUser)
router.get('/', getUser )
router.get('/:id', getUserbyid )
router.delete('/:id', deleteuser)
router.patch('/:id', updateUser)






export default router;
