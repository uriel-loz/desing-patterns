import { IBuilder } from "../interfaces/ibuilder";
import Address from "../products/address";
import Employee from "../products/employee";

class EmployeeBuilder implements IBuilder<Employee> {
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

    public setAddress(address: Address): EmployeeBuilder {
        this.adress = address;
        return this;
    }

    public setAddress(address: string, city: string, country: string, postalCode: string): EmployeeBuilder {
        this.adress = new Address(address, city, country, postalCode);
        return this;
    }

    build(): Employee {
        
    }
}

export default EmployeeBuilder;