import "server-only";

import { MongoClient, type Collection, type Db, type Document } from "mongodb";

import { env } from "@/lib/env";

type MongoCache = {
  client: MongoClient | null;
  db: Db | null;
};

declare global {
  var __tnpMongoCache: MongoCache | undefined;
}

const cache: MongoCache = global.__tnpMongoCache ?? { client: null, db: null };

if (!global.__tnpMongoCache) {
  global.__tnpMongoCache = cache;
}

export async function getDb(): Promise<Db> {
  if (cache.db) {
    return cache.db;
  }

  if (!env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured");
  }

  const client = new MongoClient(env.MONGODB_URI, {
    maxPoolSize: 10,
  });

  await client.connect();
  cache.client = client;
  cache.db = client.db(env.MONGODB_DB_NAME);
  return cache.db;
}

export async function getCollection<TSchema extends Document>(name: string): Promise<Collection<TSchema>> {
  const db = await getDb();
  return db.collection<TSchema>(name);
}
