import { Personalizable } from "./personallizable";

export class ColorDecorator implements Personalizable{
    constructor(private component: Personalizable, private color: string){}

    setColor(color: string): void {
        this.component.setColor(color);
    }

    setFont(font: string): void {
        this.component.setFont(font);
    }

    setFontSize(size: string): void {
        this.component.setFontSize(size);
    }

    applyStyles(): void {
        document.documentElement.style.setProperty('--primary-color', this.color);
        console.log("Aplicando tema color: " + this.color )
        this.component.applyStyles();
    }
}