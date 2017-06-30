import {Injectable} from "@angular/core";
import {RestService} from "../../../shared/rest.service";
import {Abilities} from "./abilities";

@Injectable()
export class AbilitiesService {
    private baseUrl: string = "/abilities";

    constructor(private restService: RestService) {
    }

    getAll(): Promise<Abilities[]> {
        return this.restService.get({url: this.baseUrl});
    }

    save(abilities: Abilities): Promise<Abilities> {
        return this.restService.post({url: this.baseUrl, data: abilities});
    }

    update(abilities: Abilities): Promise<Abilities> {
        return this.restService.put({url: this.baseUrl + "/" + abilities.id, data: abilities});
    }

    delete(abilities: Abilities): Promise<Abilities> {
        return this.restService.delete({url: this.baseUrl + "/" + abilities.id});
    }

}
