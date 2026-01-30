import express, { json } from "express";
import walletRoutes from "./routes/wallet.routes";
import errorMiddleware from "./middlewares/error.middleware";

const app = express();

app.use(json());

app.use("/api/wallet", walletRoutes);

app.use(errorMiddleware);

export default app;
