import "express-async-errors";
import "reflect-metadata";
import express from "express";
import userRouter from "./routes/user.routes";
import conatctRouter from "./routes/contact.routes";
import errorHandling from "./middlewares/errorHandling.middleware";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(conatctRouter);
app.use(errorHandling);

export default app;
