import { createHandler } from "@vercel/slack-bolt";
import { app, receiver } from "~/app";

const handler = createHandler(app, receiver);

let isInitialized = false;

export default defineEventHandler(async (event) => {
  // Initialize the app on first request (use init() not start() for serverless)
  if (!isInitialized) {
    await app.init();
    isInitialized = true;
  }

  // In v3 of Nitro, we will be able to use the request object directly
  const request = toWebRequest(event);
  return await handler(request);
});
