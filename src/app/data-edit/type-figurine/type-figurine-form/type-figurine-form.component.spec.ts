import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFigurineFormComponent } from './type-figurine-form.component';

describe('TypeFigurineFormComponent', () => {
  let component: TypeFigurineFormComponent;
  let fixture: ComponentFixture<TypeFigurineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeFigurineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeFigurineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
