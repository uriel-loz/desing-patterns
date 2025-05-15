import { Window } from "../../interfaces/ui-components.interface";

class WinWindow implements Window{
    render(): void {
        console.log("Windows Window Rendered");
    }

    addComponent(): void {
        console.log("Windows Component Added");
    }
}

export default WinWindow;