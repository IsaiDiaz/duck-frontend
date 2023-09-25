import { Component, inject } from '@angular/core';
import { DuckService } from 'src/app/services/duck.service';
import { Duck } from 'src/app/models/duck';
import { DucksRepository } from 'src/app/state/ducks.repository';


@Component({
  selector: 'app-reduced-random-duck',
  templateUrl: './reduced-random-duck.component.html',
  styleUrls: ['./reduced-random-duck.component.css']
})
export class ReducedRandomDuckComponent {
  duckService: DuckService = inject(DuckService);

  lastDuck: Duck | undefined;

  constructor(public ducksRepo: DucksRepository){}

  ngOnInit(): void{
    this.generateRandomDuckImage();
  }

  generateRandomDuckImage(): void {
    this.duckService.getRandomDuck().subscribe(duck => {
      this.lastDuck = duck;
    })
  }

  saveDuckImage(): void {
    if(this.lastDuck){
      this.duckService.postDuck(this.lastDuck).subscribe(duck => {
        alert("Pato guardado");
      })
    }
  }

}
