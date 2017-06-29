import { Injectable } from '@angular/core';
import {RestService} from "../../../shared/rest.service";
import {Keyword} from "./keyword";

@Injectable()
export class KeywordService {
  private baseUrl: string = "/keyword";

  constructor(private restService: RestService) {
  }

  getAll(): Promise<Keyword[]> {
    return this.restService.get({url: this.baseUrl});
  }

  save(typeFigurine: Keyword): Promise<Keyword> {
    return this.restService.post({url: this.baseUrl, data: typeFigurine});
  }

  update(typeFigurine: Keyword): Promise<Keyword> {
    return this.restService.put({url: this.baseUrl + "/" + typeFigurine.code, data: typeFigurine});
  }

  delete(typeFigurine: Keyword): Promise<Keyword> {
    return this.restService.delete({url: this.baseUrl + "/" + typeFigurine.code});
  }
}
