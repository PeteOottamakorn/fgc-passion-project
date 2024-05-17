const { Schema, model } = require("mongoose");

const moveSchema = new Schema();

const Move = model("moves", moveSchema);

module.exports = Move;
