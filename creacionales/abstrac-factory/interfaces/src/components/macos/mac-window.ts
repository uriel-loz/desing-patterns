import { Window } from "../../interfaces/ui-components.interface";

class MacWindow implements Window {
    render(): void {
        console.log("Mac Window Rendered");
    }
    addComponent(): void {
        console.log("Component Added to Mac Window");
    }
}

export default MacWindow;