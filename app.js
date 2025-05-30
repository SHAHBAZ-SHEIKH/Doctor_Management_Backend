import express from "express";
import  dbConnection  from "./database/dbConnection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();

dotenv.config()

app.use(
  cors({
    origin: [process.env.FRONTEND_URL_ONE || "https://doctor-management-frontend.vercel.app/", process.env.FRONTEND_URL_TWO || "https://doctor-management-admin-62u3.vercel.app/"],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);




console.log("API_KEY: ", process.env.CLOUDINARY_API_KEY);


app.use(errorMiddleware);
export default app;
