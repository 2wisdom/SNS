import app from "./app";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server Running At PORT: ${port}`);
});
