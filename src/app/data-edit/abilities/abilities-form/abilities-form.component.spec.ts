import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesFormComponent } from './abilities-form.component';

describe('AbilitiesFormComponent', () => {
  let component: AbilitiesFormComponent;
  let fixture: ComponentFixture<AbilitiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilitiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
