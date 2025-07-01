import { ExportEngine } from "../interfaces/export-engine";

class NetworkExportEngine implements ExportEngine {
    export(content: string, destination: string): void {
        console.log(`Exporting ${content} to ${destination}`);
    }
}

export default NetworkExportEngine;