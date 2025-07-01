import HtmlDocument from "./abstraction/html-document";
import MarkdownDocument from "./abstraction/markdown-document";
import FileExportEngine from "./implementor/file-export-engine";
import NetworkExportEngine from "./implementor/network-export-engine";

class Main {
    public run(){
        const fileExportEngine = new FileExportEngine();
        const networkExportEngine = new NetworkExportEngine();

        const htmlDocument = new HtmlDocument(fileExportEngine);
        htmlDocument.print('Hello World', 'file.html');

        const markdownDocument = new MarkdownDocument(networkExportEngine);
        markdownDocument.print('Hello World', 'file.md');
    }
}

const main = new Main();
main.run();