const express = require("express");
const defaultController = require("./../controllers/defaultController");
const apiRouter = require("./api/apiRoutes");

const router = express.Router();

router.use("/api", apiRouter);

router.use("/", defaultController);

module.exports = router;
