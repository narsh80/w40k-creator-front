import {inject, TestBed} from "@angular/core/testing";

import {TypeFigurineService} from "./type-figurine.service";

describe('TypeFigurineService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TypeFigurineService]
        });
    });

    it('should be created', inject([TypeFigurineService], (service: TypeFigurineService) => {
        expect(service).toBeTruthy();
    }));
});
