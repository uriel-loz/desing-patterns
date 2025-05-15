import Phone from "./phone";
import Address from './address';

class Contact {
    private _name!: string;
    private _phone!: Phone;
    private _address!: Address;

    constructor(name: string, phone: Phone, address: Address) {
        this._name = name;
        this._phone = phone;
        this._address = address;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get phone(): Phone {
        return this._phone;
    }

    public set phone(value: Phone) {
        this._phone = value;
    }

    public get address(): Address {
        return this._address;
    }

    public set address(value: Address) {
        this._address = value;
    }
}

export default Contact;