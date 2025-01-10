import { POST, GET } from "../controller/tickets.controller.js";
import { Router } from "express";

const router = Router();
router.get("/booking", GET);
router.post("/booking", POST);

export default router;
