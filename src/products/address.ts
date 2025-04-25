class Address {
    private _address!: string;
    private _city!: string;
    private _country!: string;
    private _postalCode!: string;

    constructor(address: string = '', city: string = '', country: string = '', postalCode: string = ''){
        this._address = address;
        this._city = city;
        this._country = country;
        this._postalCode = postalCode;
    }

    public get address(): string {
        return this._address;
    }

    public set address(value: string) {
        this._address = value;
    }

    public get city(): string {
        return this._city;
    }

    public set city(value: string) {
        this._city = value;
    }

    public get country(): string {
        return this._country;
    }

    public set country(value: string) {
        this._country = value;
    }

    public get postalCode(): string {
        return this._postalCode;
    }

    public set postalCode(value: string) {
        this._postalCode = value;
    }
}

export default Address;