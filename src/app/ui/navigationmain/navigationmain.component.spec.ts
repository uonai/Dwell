import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationmainComponent } from './navigationmain.component';

describe('NavigationmainComponent', () => {
  let component: NavigationmainComponent;
  let fixture: ComponentFixture<NavigationmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
