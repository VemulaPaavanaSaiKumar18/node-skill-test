const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");

const port = 4000;

const openApiRouter = require("./src/Routes/openApiRouter");

app.use(bodyParser.json());
app.use(cors());

app.use("/api-dev", openApiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
