import { elasticClient } from "../elastic/elasticConfigMethods";

export class ElasticService {
  getIndex = async () => {
    return await elasticClient.info();
  }

  createIndex = async (name: string, age: number) => {
    const response = await elasticClient.index({
      index: "test",
      body: { name, age },
    });
  
    return response;
  }

  searchAll = async () => {
    const response = await elasticClient.search({
      index: "test",
      body: {
        query: { match_all: {}},
      },
    });

    return response;
  }

  searchOne = async (id: string) => {
    const response = await elasticClient.get({ index: "test", id });
    return response;
  }

  deleteIndex = async (id: string) => {
    try {
      const response = await elasticClient.delete({
        index: "test",
        id,
      });
    
      return response;
    } catch (error) {
      return error;
    }
  }
}