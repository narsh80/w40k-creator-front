import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {TypeFigurineService} from "./shared/type-figurine.service";
import {DataColunm} from "../../shared/class/data-colunm";
import {TypeFigurine} from "./shared/type-figurine";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-type-figurine',
  templateUrl: './type-figurine.component.html',
  styleUrls: ['./type-figurine.component.css']
})
export class TypeFigurineComponent implements OnInit {
  options: TypeFigurine[];
  selectedTypeFigurine: TypeFigurine;
  cols: DataColunm[];
  saveMessage = "Armée bien sauvegarder";
  deleteMessage = "Armée bien supprimé";
  dataKey = "code";

  constructor(private armyService: TypeFigurineService, private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.cols = [
      {
        field: "code",
        header: "Code"
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
    this.selectedTypeFigurine = new TypeFigurine({
      newType : true
    });
  }

  dataSelected(option: TypeFigurine): void {
    this.selectedTypeFigurine = option;
  }

  save(args): void {
    if (args.action === "create") {
      this.armyService.save(args.formData).then(option => {

        this.toastr.success(this.saveMessage);
        this.selectedTypeFigurine = null;
        this.getAll();
      });
    } else if (args.action === "update") {
      this.armyService.update(args.formData).then(() => {
        this.toastr.success(this.saveMessage)
      });

    } else if (args.action === "delete") {
      this.armyService.delete(args.formData).then(() => {
        this.toastr.success(this.deleteMessage);
        this.selectedTypeFigurine = null;
        this.getAll();
      });

    }
  }
}
