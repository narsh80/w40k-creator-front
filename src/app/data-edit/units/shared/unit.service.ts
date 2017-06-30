import {Injectable} from "@angular/core";
import {RestService} from "../../../shared/rest.service";
import {Unit} from "./unit";

@Injectable()
export class UnitService {

    private baseUrl: string = "/unit";

    constructor(private restService: RestService) {
    }

    getAll(): Promise<Unit[]> {
        return this.restService.get({url: this.baseUrl});
    }

    save(unit: Unit): Promise<Unit> {
        return this.restService.post({url: this.baseUrl, data: unit});
    }

    update(unit: Unit): Promise<Unit> {
        return this.restService.put({url: this.baseUrl + "/" + unit.id, data: unit});
    }

    delete(unit: Unit): Promise<Unit> {
        return this.restService.delete({url: this.baseUrl + "/" + unit.id});
    }
}
