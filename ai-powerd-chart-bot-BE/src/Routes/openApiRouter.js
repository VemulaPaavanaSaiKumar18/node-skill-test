const express = require("express");
const { openApiController } = require("../controller/openApiController");
const router = express.Router();

router.post("/message", openApiController);

module.exports = router;
