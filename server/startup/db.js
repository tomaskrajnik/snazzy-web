const config = require("config");
const mongoose = require("mongoose");
const logger = require("./../startup/logger");

module.exports = function () {
  const db = config.get("db");
  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => logger.log.info(`Connected to database - ${db}...`));
};
