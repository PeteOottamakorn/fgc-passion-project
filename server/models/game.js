const { Schema, model } = require("mongoose");

const gameSchema = new Schema();

const Game = model("games", gameSchema);

module.exports = Game;
