import {Injectable} from "@angular/core";
import {RestService} from "../../../shared/rest.service";
import {TypeFigurine} from "./type-figurine";

@Injectable()
export class TypeFigurineService {

    private baseUrl: string = "/typeFigurine";

    constructor(private restService: RestService) {
    }

    getAll(): Promise<TypeFigurine[]> {
        return this.restService.get({url: this.baseUrl});
    }

    save(typeFigurine: TypeFigurine): Promise<TypeFigurine> {
        return this.restService.post({url: this.baseUrl, data: typeFigurine});
    }

    update(typeFigurine: TypeFigurine): Promise<TypeFigurine> {
        return this.restService.put({url: this.baseUrl + "/" + typeFigurine.code, data: typeFigurine});
    }

    delete(typeFigurine: TypeFigurine): Promise<TypeFigurine> {
        return this.restService.delete({url: this.baseUrl + "/" + typeFigurine.code});
    }

}
