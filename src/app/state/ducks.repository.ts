import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { select, withProps, createStore, setProp } from '@ngneat/elf';
import {
  addEntities,
  selectAllEntities,
  selectAllEntitiesApply,
  updateEntities,
  withEntities,
} from '@ngneat/elf-entities';

interface Duck {
    id: number;
    url: string;
    message: string;
}

const store = createStore(
    {name: 'ducks'},
    withEntities<Duck>()
);

@Injectable({providedIn: 'root'})
export class DucksRepository {
    ducks$ = store.pipe(selectAllEntities());

    addDuck(id: Duck['id'], url: Duck['url'], message: Duck['message']) {
        store.update(addEntities({id, url, message}));
    }

    addDucks(ducks: Duck[]) {
        store.reset();
        store.update(addEntities(ducks));
    }

}