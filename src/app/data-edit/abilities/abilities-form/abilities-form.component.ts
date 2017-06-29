import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Abilities} from "../shared/abilities";
import {ConfirmationService} from "primeng/primeng";

@Component({
  selector: 'app-abilities-form',
  templateUrl: './abilities-form.component.html',
  styleUrls: ['./abilities-form.component.css']
})
export class AbilitiesFormComponent implements OnInit {
  @Input() formData: Abilities;

  @Output() saveEvent = new EventEmitter();

  constructor() {
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
    this.saveEvent.emit({formData: this.formData, action: 'delete'});
  }
}
