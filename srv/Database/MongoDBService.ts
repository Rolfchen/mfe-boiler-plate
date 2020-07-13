import { MongoClient, Db } from "mongodb";

const { DB_PATH, DB_NAME } = process.env;

let db: Db | null = null;
let client: MongoClient | null = null;
let dbName = null;

export type MongoDBServiceType = () => {
  getClient: () => MongoClient;
  getDb: (dbName?: string) => Promise<Db>;
  disconnect: () => void;
};

export const MongoDBService: MongoDBServiceType = () => {
  const getClient = (dbPath?: string) => {
    if (!client) {
      if (!DB_PATH) {
        throw Error(
          `Cannot create DB instance. Missing required config "host" and/or "database"`
        );
      }
      const mongoUrl = dbPath || DB_PATH;
      dbName = db; // if there's a config. Overwrite the DB Name
      client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
    }
    return client;
  };

  const getDb = async (dbName?: string) => {
    if (db) {
      return db;
    } else {
      const dbClient = getClient();
      const connection = await dbClient.connect();
      db = dbName ? connection.db(dbName) : connection.db();
      return db;
    }
  };

  const disconnect = () => {
    if (client != null) {
      client.close();
      client = null;
      db = null;
    }
  };

  return {
    getClient,
    getDb,
    disconnect,
  };
};

export default MongoDBService;
