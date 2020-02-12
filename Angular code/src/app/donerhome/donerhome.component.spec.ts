import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerhomeComponent } from './donerhome.component';

describe('DonerhomeComponent', () => {
  let component: DonerhomeComponent;
  let fixture: ComponentFixture<DonerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
