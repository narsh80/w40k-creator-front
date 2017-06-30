import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {TypeFigurineComponent} from "./type-figurine.component";

describe('TypeFigurineComponent', () => {
    let component: TypeFigurineComponent;
    let fixture: ComponentFixture<TypeFigurineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypeFigurineComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeFigurineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
