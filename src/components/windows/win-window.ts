import { Window } from "../../interfaces/ui-components.interface";

class WinWindow implements Window{
    render() {
        console.log("Windows Window Rendered");
    }

    addComponent() {
        console.log("Windows Component Added");
    }
}

export default WinWindow;