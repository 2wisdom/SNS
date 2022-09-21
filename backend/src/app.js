import express, { application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import loginRouter from "./routes/login";
import useRouter from "./routes/user";
import dbConnectMiddleware from "./middlewares/dbConnect.middleware";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(dbConnectMiddleware);

app.get("/api", (req, res) => {
  res.send({
    version: "1.0",
  });
});

app.use([loginRouter, useRouter]);

export default app;
