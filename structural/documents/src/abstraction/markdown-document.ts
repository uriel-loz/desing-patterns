import Document from "./document";

class MarkdownDocument extends Document {
    print(content: string, destination: string): void {
        console.log(`Exporting ${content} to ${destination} as Markdown`);
    }
}

export default MarkdownDocument;