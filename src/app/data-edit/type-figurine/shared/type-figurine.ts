export class TypeFigurine {
    code: string;
    description: string;
    newType = false;

    constructor({code = "", description = "", newType}: { code?: string, description?: string, newType: boolean }) {
        this.code = code;
        this.description = description;
        this.newType = newType
    }
}
