import Document from "./document";

class HtmlDocument extends Document {
    print(content: string, destination: string): void {
        console.log(`Exporting ${content} to ${destination} as HTML`);
    }
}

export default HtmlDocument;