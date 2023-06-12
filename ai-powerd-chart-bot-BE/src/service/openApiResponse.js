const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  // apiKey: "sk-WgOHU4RODcsf5uZz4nTbT3B1bkFJ9PUQOMIRRKMWdEAEBKak",
  apiKey: process.env.APIKEY,
});
const openApi = new OpenAIApi(configuration);

const openAiResponse = async (message) => {
  try {
    const BotResponse = await openApi.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      max_tokens: 3000,
      temperature: 0.3,
    });
    return BotResponse;
  } catch (error) {
    return error;
  }
};

module.exports = { openAiResponse };
