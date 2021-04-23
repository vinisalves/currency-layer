import express from "express";
import Routes from "./Routes/Routes";
import cors from "cors";
import "dotenv/config";

class App {
  public app: express.Application;
  private routePrv = new Routes();
  constructor() {
    this.app = express();
    this.config();
    this.routePrv.route(this.app);
  }

  private config() {
    this.app.use(cors());
  }
}

export default new App().app;
