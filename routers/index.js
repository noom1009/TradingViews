
const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const pageRouter = require("./website/index");
router.use("/", pageRouter);

module.exports = router;