import { Ads, AdsInfo } from "../interfaces/ads.interface";

class Wall implements Ads {
    private ads: AdsInfo[] = [];

    setInfo(info: AdsInfo): void {
        this.ads.push(info);
    }

    getAd(id: string): AdsInfo {
        const response = this.ads.find(ad => ad.id === id && ad.type === "wall");

        if (!response) {
            throw new Error("Ad not found");
        }
        return response;
    }

    getAds(): AdsInfo[] {
        return this.ads.filter(ad => ad.type === "wall");
    }
}

export default Wall;