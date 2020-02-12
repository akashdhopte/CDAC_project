import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DonerSignupComponent } from './doner-signup.component';

describe('DonerSignupComponent', () => {
  let component: DonerSignupComponent;
  let fixture: ComponentFixture<DonerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
