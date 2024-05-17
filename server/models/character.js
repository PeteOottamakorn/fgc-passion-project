const { Schema, model } = require("mongoose");

const characterSchema = new Schema();

const Character = model("characters", characterSchema);

module.exports = Character;
