import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DuckService } from '../../services/duck.service';
import { Duck } from 'src/app/models/duck';
import { DucksRepository } from 'src/app/state/ducks.repository';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  duckService: DuckService = inject(DuckService);
  duckRepository: DucksRepository = inject(DucksRepository);
  //@ts-ignore
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<Duck> = new MatTableDataSource<Duck>();
  displayedColumns: string[] = ['id', 'message', 'image', 'actions'];
  ducks$ = this.duckRepository.ducks$;
  maxSize: number = 0;
  isLoading: boolean = false;

  
  constructor(public ducksRepo: DucksRepository) { 
    this.duckService.getDucks(0,5).subscribe();
  }

  ngOnInit(): void {
    this.ducks$.subscribe((response)=>{
      console.log(response);
      const ducksProps = this.duckRepository.getDucksProps();
      this.maxSize = Number(ducksProps.totalElements);
      this.isLoading = response.isLoading;
      this.dataSource.data = response.data;
    });
  }

  pageChangeEvent($event: PageEvent){
  
    console.log($event);
    this.duckService.getDucks($event.pageIndex, $event.pageSize).subscribe();

  }

  generateRandomDuckImage(): void {
    this.duckService.getDuck().subscribe(duck => {
      console.log(duck);
      alert("Pato generado, revise la ultima imagen");
    });
  }

  deleteDuck(id: number): void {
    this.duckService.deleteDuck(id).subscribe(response => {
      console.log(response);
      window.location.reload();
    });
  }

  updateDuck(id: number, duck: Duck): void {
    let message = "";
    message = prompt("Enter a message to update the duck")?.toString() || "";
    duck.message = message;
    this.duckService.updateDuck(id, duck).subscribe(response => {
      console.log(response);
      window.location.reload();
    });
  }
}
