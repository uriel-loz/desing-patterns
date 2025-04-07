export interface Button {
    render: () => void;
    handleClick: () => void;
}

export interface TextBox {
    render(): void;
    processInput(): void;
}

export interface Window {
    render(): void;
    addComponent(): void;
}