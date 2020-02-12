import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserequestComponent } from './userequest.component';

describe('UserequestComponent', () => {
  let component: UserequestComponent;
  let fixture: ComponentFixture<UserequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
