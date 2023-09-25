import { Personalizable } from "./personallizable";

export class FontSizeDecorator implements Personalizable{
    constructor(private component: Personalizable, private size: string){}

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
        document.documentElement.style.setProperty('--font-size', this.size);
        console.log("Aplicando tema size: " + this.size )
        this.component.applyStyles();
    }
}