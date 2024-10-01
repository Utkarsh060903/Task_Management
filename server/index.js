import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import { errorHandler, routeNotFound } from "./middlewares/errorMiddleware.js"
import { dbConnection } from "./utils/index.js"
import routes from "./routes/index.js"

dotenv.config()

dbConnection()

const PORT = process.env.PORT || 5000

const app = express()

app.use(
  cors({
    origin: "https://task-management-1-oklj.onrender.com",
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"], // Include OPTIONS
    credentials: true,
  })
);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use(morgan("dev"))
app.use("/api", routes)

app.use(routeNotFound)
app.use(errorHandler)

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))