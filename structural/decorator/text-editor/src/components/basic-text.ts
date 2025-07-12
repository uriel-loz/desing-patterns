import { Format } from "../interfaces/format";

class BasicText implements Format {
    render(text: string): string {
        return text;
    }
}

export default BasicText;