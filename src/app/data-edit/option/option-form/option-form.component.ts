import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Option} from "../shared/option";
import {ArmyService} from "../../army/shared/army.service";
import {Army} from "../../army/shared/army";
import {ArmyOption} from "../shared/army-option";

import * as _ from "lodash";

@Component({
    selector: 'app-option-form',
    templateUrl: './option-form.component.html',
    styleUrls: ['./option-form.component.css']
})
export class OptionFormComponent implements OnInit {
    typeOptions: string[] = ["Arme de tir", "Arme de cac", "autre"];
    armys: Army[];
    armyOptionSelected: ArmyOption;
    displayDialog: boolean;
    @Input() option: Option;

    @Output() saveEvent = new EventEmitter();

    constructor(private armyService: ArmyService) {
    }

    ngOnInit() {
        this.displayDialog = false;
        this.armyOptionSelected = new ArmyOption();
        this.armyOptionSelected.idOptions = this.option.id;
        this.armyService.getAll().then(armys => this.armys = armys)
    }

    showDialogToAdd() {
        this.armyOptionSelected = new ArmyOption();
        this.armyOptionSelected.idOptions = this.option.id;
        this.displayDialog = true;
    }

    onRowSelect(event) {
        this.armyOptionSelected = event.data as ArmyOption;
        this.displayDialog = true;
    }

    create(): void {
        this.saveEvent.emit({formData: this.option, action: 'create'});
    }

    update(): void {
        this.saveEvent.emit({formData: this.option, action: 'update'});
    }

    delete(): void {
        this.saveEvent.emit({formData: this.option, action: 'delete'});
    }

    deleteArmyOption(): void {
        let idx = this.findSelectedArmyOptionIndex();
        this.option.armyOptions.slice(idx, 1);
        this.displayDialog = false;
    }

    saveArmyOption(): void {
        this.option.armyOptions = [...this.option.armyOptions, ...[this.armyOptionSelected]];
        this.displayDialog = false;
    }

    findSelectedArmyOptionIndex(): number {
        return this.option.armyOptions.indexOf(this.armyOptionSelected);
    }

    setArmy(event): void {
        let army = _.find(this.armys, army => {
            return army.id == this.armyOptionSelected.idArmy
        });
        this.armyOptionSelected.army = army;
    }

}
