import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphnagehomeComponent } from './orphnagehome.component';

describe('OrphnagehomeComponent', () => {
  let component: OrphnagehomeComponent;
  let fixture: ComponentFixture<OrphnagehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphnagehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphnagehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
