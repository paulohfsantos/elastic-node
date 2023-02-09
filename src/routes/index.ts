import { Router } from "express";
import { ElasticController } from "../controllers/index.controller";

export const router = Router();

const elasticController = new ElasticController();

router.get("/", elasticController.getIndex);
router.post("/create", elasticController.createIndex);
router.get("/search-all", elasticController.searchIndex);
router.get("/search/:id", elasticController.getOne);
router.delete("/delete/:id", elasticController.deleteIndex);