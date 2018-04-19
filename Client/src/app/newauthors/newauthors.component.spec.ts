import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewauthorsComponent } from './newauthors.component';

describe('NewauthorsComponent', () => {
  let component: NewauthorsComponent;
  let fixture: ComponentFixture<NewauthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewauthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
