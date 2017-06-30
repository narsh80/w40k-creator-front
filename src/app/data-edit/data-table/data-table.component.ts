import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

    @Input() items: any[];
    @Input() cols: any[];
    @Input() dataKey: string;
    @Input() noDataKey: boolean;
    selectedItem: any;
    @Output() itemSelected = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
        this.dataKey = this.dataKey || "id";
        this.noDataKey = this.noDataKey || false;
    }

    selectItem(item): void {
        this.itemSelected.emit(item.data);
    }

}
