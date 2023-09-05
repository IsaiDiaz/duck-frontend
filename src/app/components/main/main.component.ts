import { Component, inject } from '@angular/core';
import { DuckService } from '../../services/duck.service';
import { Duck } from 'src/app/models/duck';
import { DucksRepository } from 'src/app/state/ducks.repository';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  duckService: DuckService = inject(DuckService);

  constructor(public ducksRepo: DucksRepository) { }

  ngOnInit(): void {
    this.getAllDucks();
  }

  getAllDucks(): void {
    this.duckService.getDucks().subscribe(ducks => {
      console.log(ducks);
      this.ducksRepo.addDucks(ducks);
    });
  }

  generateRandomDuckImage(): void {
    this.duckService.getDuck().subscribe(duck => {
      console.log(duck);
      this.getAllDucks();
      alert("Pato generado, revise la ultima imagen");
    });
  }

  deleteDuck(id: number): void {
    this.duckService.DeleteDuck(id).subscribe(response => {
      console.log(response);
      this.getAllDucks();
    });
  }

  updateDuck(id: number, duck: Duck): void {
    let message = "";
    message = prompt("Enter a message to update the duck")?.toString() || "";
    duck.message = message;
    this.duckService.UpdateDuck(id, duck).subscribe(response => {
      console.log(response);
      this.getAllDucks();
      alert("Pato actualizado, revise la ultima imagen");
    });
  }
}
