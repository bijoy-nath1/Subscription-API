import express from "express";
import { PORT } from "./envConfig/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

import subscriptionRouter from "./routes/subscription.routes.js";

const app = express();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  console.log("Hello World");
  res.status(200).json({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
