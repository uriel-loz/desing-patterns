import { FileSystemItem } from "../interfaces/file-system-item";

class File implements FileSystemItem {
    private readonly name: string = '';
    private readonly size: number = 0;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    getSize(): number {
        return this.size;
    }
    
    display(): void {
        console.log(`\tThe file is: ${this.name}`);
    }
}

export default File