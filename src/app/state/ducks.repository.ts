import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { select, withProps, createStore, setProp, setProps } from '@ngneat/elf';
import {
  addEntities,
  selectAllEntities,
  selectAllEntitiesApply,
  selectEntity,
  selectLast,
  setEntities,
  updateEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { Duck } from '../models/duck';
import { Paginator } from '../models/paginator';
import { joinRequestResult } from '@ngneat/elf-requests';

export interface DuckProps{
    totalElements: number;
    totalPages: number;
    currentPage: number;
}

const store = createStore(
    {name: 'ducks'},
    withProps<DuckProps>({totalElements: 0, totalPages: 0, currentPage: 0}),
    withEntities<Duck>()
);

@Injectable({providedIn: 'root'})
export class DucksRepository {
    ducks$ = store.pipe(selectAllEntities(), joinRequestResult(['DUCKS']));

    getDucksProps(){
        return store.query((state)=> state);
    }

    setDucks(response:Paginator<Duck>){
        store.update(setEntities(response.content),
            setProps({
        currentPage: response.number,
        totalElements: response.totalElements,
        totalPages: response.totalPages
      })
    );
    }

    addDuck(id: Duck['id'], url: Duck['url'], message: Duck['message']) {
        store.update(addEntities({id, url, message}));
    }

    addDucks(ducks: Duck[]) {
        store.reset();
        store.update(addEntities(ducks));
    }

}