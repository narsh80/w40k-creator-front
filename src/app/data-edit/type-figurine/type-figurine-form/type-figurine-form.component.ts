import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ConfirmationService} from "primeng/primeng";
import {TypeFigurine} from "../shared/type-figurine";

@Component({
    selector: 'app-type-figurine-form',
    templateUrl: './type-figurine-form.component.html',
    styleUrls: ['./type-figurine-form.component.css']
})
export class TypeFigurineFormComponent implements OnInit {
    @Input() formData: TypeFigurine;

    @Output() saveEvent = new EventEmitter();

    constructor(private confirmationService: ConfirmationService) {
    }

    ngOnInit() {
    }

    create(): void {
        this.saveEvent.emit({formData: this.formData, action: 'create'});
    }

    update(): void {
        this.saveEvent.emit({formData: this.formData, action: 'update'});
    }

    delete(): void {
        this.confirmationService.confirm({
            message: 'Vous êtes sur le point de supprimé une armée, les unité associés vont être détruite. Voulez vous continuer',
            header: 'Confirmation de la supression d\'armée',
            icon: 'fa fa-trash',
            accept: () => {
                this.saveEvent.emit({formData: this.formData, action: 'delete'});
            }
        });

    }
}
