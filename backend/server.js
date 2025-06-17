import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./.env" });

// Get environment variables
const { OPENAI_API_KEY } = process.env;

// Start server and connect to MongoDB
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
