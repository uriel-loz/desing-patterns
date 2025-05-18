import Document from "./document";

class PdfDocument extends Document {
    print(content: string, destination: string): void {
        console.log(`Exporting ${content} to ${destination} as PDF`);
    }
}

export default PdfDocument;