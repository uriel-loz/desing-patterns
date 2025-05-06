import { Ads, AdsInfo, adsType } from "../interfaces/ads.interface";
import Billboard from "../models/billboard";
import Route from "../models/route";
import Wall from "../models/wall";

class AdFactory {
    private static factoryInstance: AdFactory;
    private constructor() { }

    public static getInstance(): AdFactory {
        if (!AdFactory.factoryInstance) {
            AdFactory.factoryInstance = new AdFactory();
        }
        return AdFactory.factoryInstance;
    }

    private static adsOptions: Record<adsType, new () => Ads> = {
        billboard: Billboard,
        wall: Wall,
        route: Route,
    };

    private adInstances: Partial<Record<adsType, Ads>> = {};

    public create(type: adsType): Ads {
        if (!this.adInstances[type]) {
            this.adInstances[type] = new AdFactory.adsOptions[type]();
        }
        return this.adInstances[type]!;
    }
}

export default AdFactory;