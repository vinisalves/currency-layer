import { reactive } from "vue";
const api = process.env.VUE_APP_BASE_API;
interface Icountry {
  code: string;
  description: string;
}
interface Icurrency {
  code: string;
  value: number;
}

const store = {
  state: reactive({
    countries: <Icountry[]>[],
    currencies: <Icurrency[]>[],
    showDialog: false,
  }),

  setCountries(countries: []): void {
    this.state.countries = countries;
  },

  setCurrencies(currencies: []): void {
    this.state.currencies = currencies;
  },
  async getCountries(): Promise<void> {
    const result = await fetch(`${api}/list`).then((response) =>
      response.json()
    );

    this.setCountries(result);
  },

  async getCurrencies(): Promise<void> {
    const result = await fetch(`${api}/currencies`).then((response) =>
      response.json()
    );
    this.setCurrencies(result);
  },

  openDialog(): void {
    this.state.showDialog = true;
  },
  closeDialog(): void {
    this.state.showDialog = false;
  },
};

export default store;
