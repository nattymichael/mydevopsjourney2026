import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://nattynana74_db_user:y8CDj7hpIT6G0sU2@cluster0.x0xjuxz.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema + Model (YOU WERE MISSING THIS)
const dataSchema = new mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Data = mongoose.model("Data", dataSchema);

// Routes
app.get("/", (req, res) => {
  res.send("DevOps Project Running 🚀");
});

app.get("/test-db", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.send("Database connected ✅");
  } catch (err) {
    res.send("Database failed ❌");
  }
});

// POST route
app.post("/data", async (req, res) => {
  console.log(req.body);

  try {
    const newData = new Data({
      message: req.body.message
    });

    await newData.save();
    res.send("Data saved ✅");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// GET route
app.get("/data", async (req, res) => {
  try {
    const allData = await Data.find();
    res.json(allData);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
