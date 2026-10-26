require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const gameRoutes = require("./routes/games");
const wordRoutes = require("./routes/words");
const { seedUsers } = require("./db/seed");
const { connectToDatabase } = require("./db/mongodb");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/games", gameRoutes); 
app.use("/api/words", wordRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express" });
});

const PORT = process.env.PORT || 3001;

/** 
* MongoDB is optional for this workshop as spell check API doesn't interact with the database
* Without MONGODB_URI, the server still starts, but user/game routes won't work.
*/

if (!process.env.MONGODB_URI) {
  console.warn("MONGODB_URI not set: starting WITHOUT MongoDB (only /api/words will work).");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} else {
  //initial state check for mongoDB connection
  connectToDatabase()
    .then(() => {
      if (process.env.SEED_DB === "true") {
        seedUsers();
      }
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB:", err);
      process.exit(1);
    });
}