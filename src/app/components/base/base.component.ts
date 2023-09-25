import { Component } from '@angular/core';
import { Personalizable } from 'src/app/decorators/personallizable';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements Personalizable{
  private color: string = 'defaultColor';
  private font: string = 'defauultFont';
  private fontSize: string = 'defaultFontSize';

  setColor(color: string): void {
    this.color = color;
  }

  setFont(font: string): void {
    this.font = font;
  }

  setFontSize(size: string): void {
    this.fontSize = size;
  }

  applyStyles(): void {
    console.log("Aplicando tema base")
  }
}
