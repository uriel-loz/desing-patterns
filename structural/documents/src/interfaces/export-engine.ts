export interface ExportEngine {
    export(content: string, destination: string): void;
}