import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphnageuserComponent } from './orphnageuser.component';

describe('OrphnageuserComponent', () => {
  let component: OrphnageuserComponent;
  let fixture: ComponentFixture<OrphnageuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphnageuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphnageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
