import Folder from "./composite/folder";
import File from "./leaf/file";

class Main {
    public run(): void {
        const directory = new Folder('Documents');
        const file1 = new File('file1.txt', 10);
        const file2 = new File('file2.txt', 20);
        const file3 = new File('file3.txt', 30);

        directory.add(file1);
        directory.add(file2);
        directory.add(file3);

        directory.display();
        console.log(`Total size: ${directory.getSize()}`);
    }
}

const main = new Main();
main.run();
