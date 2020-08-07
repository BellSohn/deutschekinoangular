import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActresComponent } from './actres.component';

describe('ActresComponent', () => {
  let component: ActresComponent;
  let fixture: ComponentFixture<ActresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
