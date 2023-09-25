import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDuckComponent } from './random-duck.component';

describe('RandomDuckComponent', () => {
  let component: RandomDuckComponent;
  let fixture: ComponentFixture<RandomDuckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomDuckComponent]
    });
    fixture = TestBed.createComponent(RandomDuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
