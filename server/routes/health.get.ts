export default defineEventHandler(() => {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    env: {
      hasSlackBotToken: !!process.env.SLACK_BOT_TOKEN,
      hasSlackSigningSecret: !!process.env.SLACK_SIGNING_SECRET,
      hasAiGatewayApiKey: !!process.env.AI_GATEWAY_API_KEY,
      nodeEnv: process.env.NODE_ENV,
    },
  };
});
