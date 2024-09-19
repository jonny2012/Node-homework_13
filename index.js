import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./router.js";

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router)
      
    

const uri = "mongodb://localhost:27017/db";
async function startApp() {
  try {
    await mongoose.connect(uri);
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

//npm run dev
startApp().catch(console.dir);
