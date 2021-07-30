const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const router = require("./routers/index");
const createError = require("http-errors");
const log4js = require("log4js");
const log = log4js.getLogger();
const cors = require("cors");
const env = require('./configs/env');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(router);

module.exports = app;