import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditauthorsComponent } from './editauthors.component';

describe('EditauthorsComponent', () => {
  let component: EditauthorsComponent;
  let fixture: ComponentFixture<EditauthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditauthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
