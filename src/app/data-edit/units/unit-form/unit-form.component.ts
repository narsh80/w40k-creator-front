import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Unit} from "../shared/unit";
import {Army} from "../../army/shared/army";
import {ArmyService} from "../../army/shared/army.service";
import * as _ from "lodash";
import {TypeFigurine} from "../../type-figurine/shared/type-figurine";
import {TypeFigurineService} from "../../type-figurine/shared/type-figurine.service";
import {Figurine} from "../../figurines/shared/figurine";
@Component({
    selector: 'app-unit-form',
    templateUrl: './unit-form.component.html',
    styleUrls: ['./unit-form.component.css']
})
export class UnitFormComponent implements OnInit {
    typeUnits: TypeFigurine[];
    idArmySelected: number;

    @Input() formData: Unit;

    @Output() saveEvent = new EventEmitter();
    armies: Army[];

    constructor(private armyService: ArmyService, private typeFigService: TypeFigurineService) {
    }

    ngOnInit() {
        this.getAllArmies();
        this.getAllTypeFigs();
    }

    getAllArmies(): void {
        this.armyService.getAll().then(armies => this.armies = armies)
    }

    getAllTypeFigs(): void {
        this.typeFigService.getAll().then(typeUnits => this.typeUnits = typeUnits)
    }

    create(): void {
        this.saveEvent.emit({formData: this.formData, action: 'create'});
    }

    update(): void {
        this.saveEvent.emit({formData: this.formData, action: 'update'});
    }

    delete(): void {
        this.saveEvent.emit({formData: this.formData, action: 'delete'});
    }

    setArmy(): void {
        let a = _.find(this.armies, (army) => army.id == this.idArmySelected);
        this.formData.army = a;
    }

    isFormInvalid(dataForm): boolean {
        return dataForm.invalid || ( this.formData.figurines && this.formData.figurines.length < 1)
    }

    delFig(figurine: Figurine): void {
        let idx = _.findIndex(this.formData.figurines, (fig) => fig.id == figurine.id);
        this.formData.figurines.splice(idx, 1);
    }

    updateFig(figurine: Figurine): void {
        let idx = _.findIndex(this.formData.figurines, (fig) => fig.id == figurine.id);
        this.formData.figurines[idx] = figurine;
        this.formData.figurines = [...this.formData.figurines];
    }

    addFig(figurine: Figurine): void {

        this.formData.figurines = [...this.formData.figurines, ...[figurine]];
    }
}
