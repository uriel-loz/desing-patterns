import { ICurrencyConverter } from "../interfaces/icurrency-converter.interface";
import UsdCurrencyService from "../services/usd-currency.service";

class CurrencyAdapter implements ICurrencyConverter {
    private rate: number = 17;
    private usdCurrencyService: UsdCurrencyService;

    constructor(usdCurrencyService: UsdCurrencyService) {
        this.usdCurrencyService = usdCurrencyService;
    }
    
    convert(productId: number): number {
        const priceInUsd = this.usdCurrencyService.getPriceInUsd(productId);

        return priceInUsd * this.rate;
    }
}

export default CurrencyAdapter;
