export interface UIComponent {
    render(): string;
    getWidth(): number;
    getHeight(): number;
}