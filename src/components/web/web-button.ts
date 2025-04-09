import { Button } from "../../interfaces/ui-components.interface";

class WebButton implements Button {
    render(): void {
        console.log("Web Button Rendered");
    };
    handleClick(): void {
        console.log("Web Button Clicked");
    };
}

export default WebButton;