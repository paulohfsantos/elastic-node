import {
  Client,
  BaseConnectionPool,
  Connection,
  Serializer
} from "@elastic/elasticsearch";
import { config } from "dotenv";

config();

class MyConnectionPool extends BaseConnectionPool {
  markAlive(connection: Connection) {
    console.log("markAlive", connection);
    return super.markAlive(connection);
  }
}

class MySerializer extends Serializer {
  serialize(obj: Record<string, string>): string {
    return JSON.stringify(obj);
  }
}

const options = {
  host: process.env.LOCAL as string,
  cloud: { id: process.env.CLOUD_ID as string },
  auth: {
    username: process.env.AUTH as string,
    password: process.env.PASSWORD as string,
  },
  maxRetries: 5,
  connectionPool: MyConnectionPool,
  serializer: MySerializer,
}

export const elasticClient = new Client(options);