import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config/config";
import setupRoute from "./routes";
import { StatusCodes } from "http-status-codes";
import { createServer as createHTTPServer } from "http";

const bodyParser = require("body-parser");

const fileUpload = require("express-fileupload");
require("events").EventEmitter.defaultMaxListeners = 15;

const options = {
  inflate: true,
  limit: "5gb",
  type: "application/octet-stream",
};

const app: Application = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(fileUpload());
app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.raw(options));

// Routes
app.get("/", (req: Request, res: Response) => {
  console.log("Received request: ", req.url);
  res.status(StatusCodes.OK).send("API Running");
});

// Setup routes
setupRoute(app);

var http = createHTTPServer(app);

http.listen(config.server.port, async () => {
  console.log(`server started ${config.server.port}`);
});

export default http;
