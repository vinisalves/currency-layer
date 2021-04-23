import { Application } from "express";
import CurrencyController from "../Controllers/Currency";

export default class Routes {
  public route(app: Application): void {
    const currencyObj = new CurrencyController();
    app.get("/api/currencies", currencyObj.getCurrencies);
    app.get("/api/list", currencyObj.getCountryList);
  }
}
