import {Injectable} from "@angular/core";
import {RestService} from "../../../shared/rest.service";
import {Option} from "./option";

@Injectable()
export class OptionService {
    private baseUrl: string = "/options";

    constructor(private restService: RestService) {
    }

    getAll(): Promise<Option[]> {
        return this.restService.get({url: this.baseUrl});
    }

    save(option: Option): Promise<Option> {
        return this.restService.post({url: this.baseUrl, data: option});
    }

    update(option: Option): Promise<Option> {
        return this.restService.put({url: this.baseUrl + "/" + option.id, data: option});
    }

    delete(option: Option): Promise<Option> {
        return this.restService.delete({url: this.baseUrl + "/" + option.id});
    }

}
