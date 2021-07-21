// Creating database schema for outlining the structure of the database
import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
});

// Defining the collection name
export default mongoose.model("cards", cardSchema);
