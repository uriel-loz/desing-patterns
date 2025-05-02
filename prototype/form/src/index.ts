import FormTemplate from "./models/form-template";

class Main {
    private form!: FormTemplate;

    run(){
        this.form = new FormTemplate("Form1", 10, "red");
        console.log(this.form.getName());
        console.log(this.form.getSize());
        console.log(this.form.getColor());

        const form2 = this.form.clone();
        form2.setSize(20);
        form2.setColor("blue");

        console.log(form2.getName());
        console.log(form2.getSize());
        console.log(form2.getColor());
    }
}

const main = new Main();
main.run();
