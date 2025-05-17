import CurrencyAdapter from "./adapters/currency-adapter";
import UsdCurrencyService from "./services/usd-currency.service";

class Main {
    start(): void {
        const usdCurrencyService = new UsdCurrencyService();
        const adapter = new CurrencyAdapter(usdCurrencyService);

        console.log(adapter.convert(4));
    }
}

const main = new Main();
main.start();