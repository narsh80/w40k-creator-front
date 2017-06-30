export class Keyword {
    code: string;
    newType = false;

    constructor({code = "", newType}: { code?: string, newType: boolean }) {
        this.code = code;
        this.newType = newType
    }
}
