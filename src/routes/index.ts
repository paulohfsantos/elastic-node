import { Router } from "express";
import { ElasticController } from "../controllers/index.controller";

export const router = Router();

const elasticController = new ElasticController();

router.get("/", elasticController.getIndex);
router.post("/create", elasticController.createIndex);
router.get("/search", elasticController.searchIndex);
router.delete("/delete", elasticController.deleteIndex);