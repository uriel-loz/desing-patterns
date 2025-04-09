import { Window } from "../../interfaces/ui-components.interface";

class WebWindow implements Window {
    render(): void {
        throw new Error("Method not implemented.");
    }
    addComponent(): void {
        throw new Error("Method not implemented.");
    }
}

export default WebWindow;