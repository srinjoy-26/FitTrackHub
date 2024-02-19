import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject('65cf9227559ca2f16a25'); 

export const account = new Account(client);
export const databases = new Databases(client);
