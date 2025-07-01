import { ExportEngine } from "../interfaces/export-engine";

abstract class Document {
    private engine: ExportEngine;

    constructor(exportEngine: ExportEngine) {
        this.engine = exportEngine;
    }

    abstract print(content: string, destination: string): void;
}

export default Document;