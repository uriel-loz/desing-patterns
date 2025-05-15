import { Button } from "../../interfaces/ui-components.interface";

class WinButton implements Button{
    render(): void {
        console.log("Windows Button Rendered");
    }

    handleClick(): void {
        console.log("Windows Button Clicked");
    }
}

export default WinButton;