import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Army} from "../shared/army";
import {ArmyService} from "../shared/army.service";
import {ConfirmationService} from "primeng/primeng";

@Component({
  selector: 'app-army-form',
  templateUrl: './army-form.component.html',
  styleUrls: ['./army-form.component.css']
})
export class ArmyFormComponent implements OnInit {
  @Input() formData: Army;

  @Output() saveEvent = new EventEmitter();

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {}

  create():void {
    this.saveEvent.emit({ formData:this.formData,action: 'create'});
  }

  update():void {
    this.saveEvent.emit({ formData:this.formData,action: 'update'});
  }

  delete():void {
    this.confirmationService.confirm({
      message: 'Vous êtes sur le point de supprimé une armée, les unité associés vont être détruite. Voulez vous continuer',
      header: 'Confirmation de la supression d\'armée',
      icon: 'fa fa-trash',
      accept: () => {
        this.saveEvent.emit({ formData:this.formData,action: 'delete'});
      }
    });

  }

}
