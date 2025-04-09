import { Window } from "../../interfaces/ui-components.interface";

class WebWindow implements Window {
    render(): void {
        console.log("Web Window Rendered");
    }
    addComponent(): void {
        console.log("Web Window Rendered");
    }
}

export default WebWindow;