import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlaceComponentComponent } from './delete-place-component.component';

describe('DeletePlaceComponentComponent', () => {
  let component: DeletePlaceComponentComponent;
  let fixture: ComponentFixture<DeletePlaceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePlaceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlaceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
