import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Unit} from "./shared/unit";
import {DataColunm} from "../../shared/class/data-colunm";
import {UnitService} from "./shared/unit.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units: Unit[];
  selectedUnits: Unit;
  cols: DataColunm[];
  constructor(private unitService: UnitService, private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.cols = [
      {
        field:"id",
        header:"Id"
      },
      {
        field:"nom",
        header:"Nom"
      },
      {
        field:"typeFigurine",
        header:"type d'unité"
      },
      {
        field:"army.nom",
        header:"Armée"
      }
    ];
    this.getAll();
  }

  getAll(): void{
    this.unitService.getAll().then(units => this.units = units);
  }

  new(): void{
    let unit = new Unit();
    unit.figurines = [];
    this.selectedUnits = unit;
  }

  dataSelected(unit: Unit):void{
    this.selectedUnits = unit;
  }

  save(args): void{
    if(args.action === "create") {
      this.unitService.save(args.formData).then(unit => {
        this.toastr.success("formData bien sauvegarder");
        this.selectedUnits = null;
        this.getAll();
      });
    }else if(args.action === "update") {
      this.unitService.update(args.formData).then(() => {
        this.toastr.success("formData bien sauvegarder")
      });

    }else if(args.action === "delete") {
      this.unitService.delete(args.formData).then(() => {
        this.toastr.success("formData bien supprimé");
        this.selectedUnits = null;
        this.getAll();
      });

    }

  }

}
