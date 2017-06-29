import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurinesComponent } from './figurines.component';

describe('FigurinesComponent', () => {
  let component: FigurinesComponent;
  let fixture: ComponentFixture<FigurinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
