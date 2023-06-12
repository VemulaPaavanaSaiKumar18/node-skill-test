const { openAiResponse } = require("../service/openApiResponse");

const openApiController = async (req, res) => {
  try {
    const { message } = req.body;
    if (!!message) {
      const response = await openAiResponse(message);
      res
        .status(200)
        .json({
          botResponse: response.data.choices[0].text,
          message: "Success",
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ err: error, botResponse: "something is went wrong" });
  }
};

module.exports = { openApiController };
