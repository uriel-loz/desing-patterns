import { IBuilder } from "../interfaces/ibuilder";
import Address from "../products/address";
import Contact from "../products/contact";
import Employee from "../products/employee";
import Phone from "../products/phone";

class EmployeeBuilder implements IBuilder<Employee> {
    private age: number|null = null;
    private name: string|null = null;
    private gender: string|null = null;
    private adress: Address|null = null;
    private phone: Phone[] = [];
    private contact: Contact[] = [];

    public setAge(age: number): EmployeeBuilder {
        this.age = age;
        return this;
    }

    public setName(name: string): EmployeeBuilder {
        this.name = name;
        return this;
    }

    public setGender(gender: string): EmployeeBuilder {
        this.gender = gender;
        return this;
    }

    public setObjectAddress(address: Address): EmployeeBuilder {
        this.adress = address;
        return this;
    }

    public setAddress(address: string, city: string, country: string, postalCode: string): EmployeeBuilder {
        this.adress = new Address(address, city, country, postalCode);
        return this;
    }

    public setPhone(phoneNumber: string, ext: string, type: string): EmployeeBuilder {
        this.phone.push(new Phone(phoneNumber, ext, type));
        return this;
    }

    public setObjectPhone(phone: Phone): EmployeeBuilder {
        this.phone.push(phone);
        return this;
    }

    public setContact(name: string, phone: Phone, address: Address): EmployeeBuilder {
        this.contact.push(new Contact(name, phone, address));
        return this;
    }

    public setObjectContact(contact: Contact): EmployeeBuilder {
        this.contact.push(contact);
        return this;
    }

    build(): Employee {
        return new Employee(
            this.age, 
            this.name, 
            this.gender,
            this.adress,
            this.phone,
            this.contact
        )
    }
}

export default EmployeeBuilder;