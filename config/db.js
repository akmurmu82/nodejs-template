const mongoose = require("mongoose");
const connection = (mongo_uri) => mongoose.connect(mongo_uri);

module.exports = connection;
