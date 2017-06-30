import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {Option} from "./shared/option";
import {DataColunm} from "../../shared/class/data-colunm";
import {OptionService} from "./shared/option.service";
import {ToastsManager} from "ng2-toastr";

@Component({
    selector: 'app-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

    options: Option[];
    selectedOptions: Option;
    cols: DataColunm[];

    constructor(private optionService: OptionService, private toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }

    ngOnInit() {
        this.cols = [
            {
                field: "id",
                header: "Id"
            },
            {
                field: "typeOption",
                header: "type d'options"
            },
            {
                field: "nom",
                header: "Nom"
            },
            {
                field: "description",
                header: "Description"
            },
            {
                field: "type",
                header: "type"
            },
            {
                field: "distance",
                header: "distance"
            },
            {
                field: "strength",
                header: "Force"
            },
            {
                field: "ap",
                header: "Pénétration d'armure"
            },
            {
                field: "d",
                header: "Dégat"
            },
            {
                field: "abilitie",
                header: "Regle"
            }
        ];
        this.getAll();
    }

    getAll(): void {
        this.optionService.getAll().then(options => this.options = options);
    }

    new(): void {
        this.selectedOptions = new Option();
    }

    dataSelected(option: Option): void {
        this.selectedOptions = option;
    }

    save(args): void {
        if (args.action === "create") {
            this.optionService.save(args.formData).then(option => {
                this.toastr.success("formData bien sauvegarder");
                this.selectedOptions = null;
                this.getAll();
            });
        } else if (args.action === "update") {
            this.optionService.update(args.formData).then(() => {
                this.toastr.success("formData bien sauvegarder")
            });

        } else if (args.action === "delete") {
            this.optionService.delete(args.formData).then(() => {
                this.toastr.success("formData bien supprimé");
                this.selectedOptions = null;
                this.getAll();
            });

        }

    }
}
