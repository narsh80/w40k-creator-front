import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Keyword} from "../shared/keyword";
import {ConfirmationService} from "primeng/primeng";

@Component({
  selector: 'app-keyword-form',
  templateUrl: './keyword-form.component.html',
  styleUrls: ['./keyword-form.component.css']
})
export class KeywordFormComponent implements OnInit {
  @Input() formData: Keyword;

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
    this.saveEvent.emit({ formData:this.formData,action: 'delete'});
  }

}
