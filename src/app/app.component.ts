import { Component } from '@angular/core';

import { BaseComponent } from './components/base/base.component';
import { ColorDecorator } from 'src/app/decorators/color-decorator';
import { FontColorDecorator } from 'src/app/decorators/font-color-decorator';
import { FontSizeDecorator } from 'src/app/decorators/font-size-decorator';
import { Personalizable } from 'src/app/decorators/personallizable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'duck-frontend';
  
  fondo(){
    const baseComponent: Personalizable = new BaseComponent();

    const personalizedComponent: Personalizable = new ColorDecorator(baseComponent, '#e6bfe1'); 
    
    personalizedComponent.applyStyles();
  }

  letra(){
    const baseComponent: Personalizable = new BaseComponent();

    const personalizedComponent: Personalizable = new FontColorDecorator(baseComponent,'white');  
    
    personalizedComponent.applyStyles();
  }

  tamano(){
    const baseComponent: Personalizable = new BaseComponent();

    const personalizedComponent: Personalizable = new FontSizeDecorator(baseComponent, '50px');  
    
    personalizedComponent.applyStyles();
  }

  fondoYLetra(){
    const baseComponent: Personalizable = new BaseComponent();

    const personalizedComponent: Personalizable = new ColorDecorator(new FontColorDecorator(baseComponent, 'white'), '#e6bfe1');  
    
    personalizedComponent.applyStyles();
  }

  fondoYTamano(){
    const baseComponent: Personalizable = new BaseComponent();

    const personalizedComponent: Personalizable = new ColorDecorator(new FontSizeDecorator(baseComponent, '50px'), '#e6bfe1');  
    
    personalizedComponent.applyStyles();
  }

  fondoTamanoYLetra(){
    const baseComponent: Personalizable = new BaseComponent();

    const personalizedComponent: Personalizable = new ColorDecorator(new FontColorDecorator(new FontSizeDecorator(baseComponent, '50px'), 'white'), '#e6bfe1');  
    
    personalizedComponent.applyStyles();
  }

  letraYTamano(){
    const baseComponent: Personalizable = new BaseComponent();

    const personalizedComponent: Personalizable = new FontColorDecorator(new FontSizeDecorator(baseComponent, '50px'), 'white');  
    
    personalizedComponent.applyStyles();
  }

  reset(){
    const baseComponent: Personalizable = new BaseComponent();

    const personalizedComponent: Personalizable = new ColorDecorator(new FontColorDecorator(new FontSizeDecorator(baseComponent, '16px'), 'black'), '#3f51b5');  
    
    personalizedComponent.applyStyles();
  }



}
