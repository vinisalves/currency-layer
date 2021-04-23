import { Request, Response } from "express";
import currencyApi from "../Plugins/ApiCurrencyLayer";

export default class Currency {
  async getCurrencies(req: Request, res: Response): Promise<void> {
    return currencyApi
      .get("/live")
      .then((response) => {
        if (!response.data.success) {
          const { error } = response.data;
          throw new Error(error.info);
        }

        const currencies = Object.entries(
          response.data.quotes
        ).map(([k, v]) => ({ code: k, value: v }));

        res.status(200).send(currencies);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  }

  async getCountryList(req: Request, res: Response): Promise<void> {
    return currencyApi
      .get("list")
      .then((response) => {
        if (!response.data.success) {
          const { error } = response.data;
          throw new Error(error.info);
        }

        const countries = Object.entries(
          response.data.currencies
        ).map(([k, v]) => ({ code: k, description: v }));
        res.status(200).send(countries);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  }
}
