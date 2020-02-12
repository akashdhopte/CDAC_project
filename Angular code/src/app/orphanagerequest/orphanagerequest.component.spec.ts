import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanagerequestComponent } from './orphanagerequest.component';

describe('OrphanagerequestComponent', () => {
  let component: OrphanagerequestComponent;
  let fixture: ComponentFixture<OrphanagerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphanagerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanagerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
