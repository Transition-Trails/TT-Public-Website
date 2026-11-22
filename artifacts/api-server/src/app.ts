import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";
import { mediaStorageFor } from "./lib/media-storage";
import { createMediaRouter } from "./routes/media";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
// The media endpoint checks auth before reading its binary request body.
app.use(
  "/api/media",
  createMediaRouter(
    mediaStorageFor(process.env.SOCIAL_MEDIA_BUCKET_ID),
    process.env.SOCIAL_MEDIA_UPLOAD_TOKEN,
  ),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
