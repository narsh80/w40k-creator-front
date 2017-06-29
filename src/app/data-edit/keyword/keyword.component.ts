import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Keyword} from "./shared/keyword";
import {DataColunm} from "../../shared/class/data-colunm";
import {KeywordService} from "./shared/keyword.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {
  options: Keyword[];
  selectedKeyword: Keyword;
  cols: DataColunm[];
  saveMessage = "Keyword bien sauvegarder";
  deleteMessage = "Keyword bien supprimé";
  dataKey = "code";

  constructor(private armyService: KeywordService, private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.cols = [
      {
        field: "code",
        header: "Code"
      }
    ];
    this.getAll();
  }

  getAll(): void {
    this.armyService.getAll().then(options => this.options = options);
  }

  new(): void {
    this.selectedKeyword = new Keyword({
      newType : true
    });
  }

  dataSelected(option: Keyword): void {
    this.selectedKeyword = option;
  }

  save(args): void {
    if (args.action === "create") {
      this.armyService.save(args.formData).then(option => {

        this.toastr.success(this.saveMessage);
        this.selectedKeyword = null;
        this.getAll();
      });
    } else if (args.action === "update") {
      this.armyService.update(args.formData).then(() => {
        this.toastr.success(this.saveMessage)
      });

    } else if (args.action === "delete") {
      this.armyService.delete(args.formData).then(() => {
        this.toastr.success(this.deleteMessage);
        this.selectedKeyword = null;
        this.getAll();
      });

    }
  }

}
