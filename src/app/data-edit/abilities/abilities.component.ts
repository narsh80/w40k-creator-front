import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {Abilities} from "./shared/abilities";
import {DataColunm} from "../../shared/class/data-colunm";
import {AbilitiesService} from "./shared/abilities.service";
import {ToastsManager} from "ng2-toastr";

@Component({
    selector: 'app-abilities',
    templateUrl: './abilities.component.html',
    styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
    options: Abilities[];
    selectedAbilities: Abilities;
    cols: DataColunm[];
    saveMessage = "Armée bien sauvegarder";
    deleteMessage = "Armée bien supprimé";

    constructor(private armyService: AbilitiesService, private toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }

    ngOnInit() {
        this.cols = [
            {
                field: "id",
                header: "Id"
            },
            {
                field: "nom",
                header: "Nom"
            },
            {
                field: "description",
                header: "Description"
            },
        ];
        this.getAll();
    }

    getAll(): void {
        this.armyService.getAll().then(options => this.options = options);
    }

    new(): void {
        this.selectedAbilities = new Abilities();
    }

    dataSelected(option: Abilities): void {
        this.selectedAbilities = option;
    }

    save(args): void {
        if (args.action === "create") {
            this.armyService.save(args.formData).then(option => {

                this.toastr.success(this.saveMessage);
                this.selectedAbilities = null;
                this.getAll();
            });
        } else if (args.action === "update") {
            this.armyService.update(args.formData).then(() => {
                this.toastr.success(this.saveMessage)
            });

        } else if (args.action === "delete") {
            this.armyService.delete(args.formData).then(() => {
                this.toastr.success(this.deleteMessage);
                this.selectedAbilities = null;
                this.getAll();
            });

        }

    }

}
