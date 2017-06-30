import {Injectable} from "@angular/core";
import {RestService} from "../../../shared/rest.service";
import {Army} from "./army";

@Injectable()
export class ArmyService {

    private baseUrl: string = "/army";

    constructor(private restService: RestService) {
    }

    getAll(): Promise<Army[]> {
        return this.restService.get({url: this.baseUrl});
    }

    save(army: Army): Promise<Army> {
        return this.restService.post({url: this.baseUrl, data: army});
    }

    update(army: Army): Promise<Army> {
        return this.restService.put({url: this.baseUrl + "/" + army.id, data: army});
    }

    delete(army: Army): Promise<Army> {
        return this.restService.delete({url: this.baseUrl + "/" + army.id});
    }

}
