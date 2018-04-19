import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewquotesComponent } from './newquotes.component';

describe('NewquotesComponent', () => {
  let component: NewquotesComponent;
  let fixture: ComponentFixture<NewquotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewquotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
