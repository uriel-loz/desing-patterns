class Phone {
    private _phoneNumber!: string;
    private _ext!: string;
    private _type!: string;

    constructor(phoneNumber: string, ext: string, type: string) {
        this._phoneNumber = phoneNumber;
        this._ext = ext;
        this._type = type;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public get ext(): string {
        return this._ext;
    }

    public set ext(value: string) {
        this._ext = value;
    }

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }
}

export default Phone;