import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ArmyFormComponent} from "./army-form.component";

describe('ArmyFormComponent', () => {
    let component: ArmyFormComponent;
    let fixture: ComponentFixture<ArmyFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArmyFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArmyFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
