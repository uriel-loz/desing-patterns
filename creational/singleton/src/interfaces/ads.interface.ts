export interface Ads{
    setInfo(info: AdsInfo): void;
    getAd(id: string): AdsInfo;
    getAds(): AdsInfo[];
}

export interface AdsInfo {
    id: string;
    name: string;
    description: string;
    type?: adsType;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export type adsType = "billboard" | "wall" | "route";