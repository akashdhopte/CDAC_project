import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageSignupComponent } from './orphanage-signup.component';

describe('OrphanageSignupComponent', () => {
  let component: OrphanageSignupComponent;
  let fixture: ComponentFixture<OrphanageSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphanageSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanageSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
