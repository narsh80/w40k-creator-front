import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Army} from "./shared/army";
import {ArmyService} from "./shared/army.service";
import {ToastsManager} from "ng2-toastr";
import {DataColunm} from "../../shared/class/data-colunm";

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmyComponent implements OnInit {
  options: Army[];
  selectedArmy: Army;
  cols: DataColunm[];
  saveMessage = "Armée bien sauvegarder";
  deleteMessage = "Armée bien supprimé";
  constructor(private armyService: ArmyService, private toastr: ToastsManager, vRef: ViewContainerRef) {
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
        field:"description",
        header:"Description"
      },
    ];
    this.getAll();
  }

  getAll(): void{
    this.armyService.getAll().then(options => this.options = options);
  }

  new(): void{
    this.selectedArmy = new Army();
  }

  dataSelected(option: Army):void{
    this.selectedArmy = option;
  }

  save(args): void{
    if(args.action === "create") {
      this.armyService.save(args.formData).then(option => {

        this.toastr.success(this.saveMessage);
        this.selectedArmy = null;
        this.getAll();
      });
    }else if(args.action === "update") {
      this.armyService.update(args.formData).then(() => {
        this.toastr.success(this.saveMessage)
      });

    }else if(args.action === "delete") {
      this.armyService.delete(args.formData).then(() => {
        this.toastr.success(this.deleteMessage);
        this.selectedArmy = null;
        this.getAll();
      });

    }

  }
}
