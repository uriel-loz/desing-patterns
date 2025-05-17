import EmployeeBuilder from './builder/employee-builder';
import Employee from './products/employee';
class Main {
    private employee: Employee = new EmployeeBuilder()
        .setAge(30)
        .setName('John Doe')
        .setGender('Male')
        .setAddress('123 Main St', 'New York', 'USA', '10001')
        .setPhone('123-456-7890', '123', 'Mobile')
        .build();


    public run() {
        console.log('Employee: ', this.employee);
        
    }
}

const main = new Main();
main.run();