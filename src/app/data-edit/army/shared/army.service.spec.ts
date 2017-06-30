import {inject, TestBed} from "@angular/core/testing";

import {ArmyService} from "./army.service";

describe('ArmyService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ArmyService]
        });
    });

    it('should be created', inject([ArmyService], (service: ArmyService) => {
        expect(service).toBeTruthy();
    }));
});
