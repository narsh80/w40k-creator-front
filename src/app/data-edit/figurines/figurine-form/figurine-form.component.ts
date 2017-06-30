import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Figurine} from "../shared/figurine";

@Component({
    selector: 'app-figurine-form',
    templateUrl: './figurine-form.component.html',
    styleUrls: ['./figurine-form.component.css']
})
export class FigurineFormComponent implements OnInit {
    // typeFigurines: TypeFigurine[];
    // idArmySelected: number;

    @Input() formData: Figurine;
    @Input() newFig: boolean;

    @Output() saveEvent = new EventEmitter();
    // armies: Army[];

    constructor() {
    }

    ngOnInit() {
        // this.getAllArmies();
        // this.getAllTypeFigs();
    }


    addFigurineToUnit(): void {
        this.saveEvent.emit({formData: this.formData, action: 'add'});
    }

    updateFigurineToUnit(): void {
        this.saveEvent.emit({formData: this.formData, action: 'update'});
    }

    delete(): void {
        this.saveEvent.emit({formData: this.formData, action: 'delete'});
    }

    isFormInvalid(dataForm): boolean {
        return false;
    }

}
