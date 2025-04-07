import { Button } from "../../interfaces/ui-components.interface";

class WinButton implements Button{
    render () {
        console.log("Windows Button Rendered");
    }

    handleClick () {
        console.log("Windows Button Clicked");
    }
}

export default WinButton;