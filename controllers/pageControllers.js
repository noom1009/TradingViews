const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
const app = express();
const log4js = require("log4js");
const log = log4js.getLogger();
const logger = require("morgan");
const session = require("express-session");
const configViews = require('../configs/configPage')

exports.getPageController =  (req, res, next) => {
  res.render(configViews.homePage, {
    title: "Plot TradingView Charts",
    header: "Test call api ETHUSDT",
    messages: "https://api.binance.com",
  });
};

exports.pageController = (req, res, next) => {};