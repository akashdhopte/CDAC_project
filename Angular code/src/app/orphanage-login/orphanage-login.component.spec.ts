import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageLoginComponent } from './orphanage-login.component';

describe('OrphanageLoginComponent', () => {
  let component: OrphanageLoginComponent;
  let fixture: ComponentFixture<OrphanageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphanageLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
