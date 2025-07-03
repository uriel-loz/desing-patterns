import { FileSystemItem } from "../interfaces/file-system-item";

class Folder implements FileSystemItem {
    private readonly name: string = '';
    private readonly children: FileSystemItem[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(item: FileSystemItem): void {
        this.children.push(item);
    }

    remove(item: FileSystemItem): void {
        this.children.splice(this.children.indexOf(item), 1);
    }

    getSize(): number {
        return this.children.reduce((accumulator, current) => accumulator + current.getSize(), 0);
    }

    display(): void {
        console.log(`The folder is: ${this.name}`);
        this.children.forEach((item) => item.display());
    }
}

export default Folder