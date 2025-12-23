import express from "express";

import { resolve, join } from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./env.js";

const app = express();
const __dirname = resolve();
const PORT = ENV.PORT || 3000;

app.use(express.json());
// Connect to MongoDB before starting the server
await connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (ENV.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
