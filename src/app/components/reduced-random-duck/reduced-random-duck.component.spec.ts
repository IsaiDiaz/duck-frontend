import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducedRandomDuckComponent } from './reduced-random-duck.component';

describe('ReducedRandomDuckComponent', () => {
  let component: ReducedRandomDuckComponent;
  let fixture: ComponentFixture<ReducedRandomDuckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReducedRandomDuckComponent]
    });
    fixture = TestBed.createComponent(ReducedRandomDuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
