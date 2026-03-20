import * as dotenv from "dotenv";

dotenv.config();

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env variable: ${name}`);
  }
  return value;
}

export const config = {
  baseUrl: getEnv("BASE_URL"),
  instanceId: getEnv("INSTANCE_ID"),
  apiToken: getEnv("API_TOKEN"),
  chatId: getEnv("CHAT_ID"),
};
