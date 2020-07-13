import express from "express";
import cors from "cors";
import path from "path";
import { Request, Response, Router } from "express";
import { TestRoute, StatisticsRoute, SuppliersRoute } from "./Routes";

const app = express();

const { PORT = 3000, CORS_ORIGINS = "" } = process.env;

const corsOptions = {
  origin: CORS_ORIGINS.split(","),
};
app.use(cors(corsOptions));
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world 3",
  });
});
app.use(
  "/components",
  express.static(path.resolve(__dirname, "assets"), {
    extensions: ["js", "json"],
  })
);
app.use("/api", TestRoute);
app.use("/api/v1/", StatisticsRoute);
app.use("/api/v1/", SuppliersRoute);

if (require.main === module) {
  // true if file is executed
  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
}

export default app;
