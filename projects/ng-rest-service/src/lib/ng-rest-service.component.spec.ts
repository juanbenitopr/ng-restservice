import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRestServiceComponent } from './ng-rest-service.component';

describe('NgRestServiceComponent', () => {
  let component: NgRestServiceComponent;
  let fixture: ComponentFixture<NgRestServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRestServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
