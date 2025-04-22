import { Button } from "../../interfaces/ui-components.interface";

class MacButton implements Button {
    render(): void {
        console.log("Mac Button Rendered");
    };

    handleClick(): void {
        console.log("Mac Button Clicked");
    };    
}

export default MacButton;