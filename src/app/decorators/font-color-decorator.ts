import { Personalizable } from "./personallizable";

export class FontColorDecorator implements Personalizable{
    constructor(private component: Personalizable, private font: string){}

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
        document.documentElement.style.setProperty('--font-color', this.font);
        console.log("Aplicando tema font: " + this.font )
        this.component.applyStyles();
    }
}