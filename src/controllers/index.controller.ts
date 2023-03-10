import { Request, Response } from "express";
import { ElasticService } from "../services/index.service";

const elasticService = new ElasticService();

export class ElasticController {
  getIndex = async (req: Request, res: Response) => {
    const response = await elasticService.getIndex();

    res.status(200).json(response);
  }

  createIndex = async (req: Request, res: Response) => {
    try {
      const response: unknown = await elasticService.createIndex(
        req.body.name,
        req.body.age
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  getOne = async (req: Request, res: Response) => {
    try {
      const response = await elasticService.searchOne(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  searchIndex = async (req: Request, res: Response) => {
    try {
      const response = await elasticService.searchAll();
      res.status(200).json(response.hits);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  deleteIndex = async (req: Request, res: Response) => {
    try {
      const response: unknown = await elasticService.deleteIndex(req.body.id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}