import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Figurine} from "./shared/figurine";
import * as _ from "lodash";

@Component({
    selector: 'app-figurines',
    templateUrl: './figurines.component.html',
    styleUrls: ['./figurines.component.css']
})
export class FigurinesComponent implements OnInit {
    @Input() figurines: Figurine[];
    @Output() addFigEvent = new EventEmitter();
    @Output() delFigEvent = new EventEmitter();
    @Output() updateFigEvent = new EventEmitter();
    newFig: boolean = false;
    selectedFigurines: Figurine;
    cols: any[];

    constructor() {
    }

    ngOnInit() {
        this.cols = [
            {
                field: "nom",
                header: "Nom",
                style: {
                    width: '300px'
                }
            },
            {
                field: "m",
                header: "M",
                style: {
                    width: '38px'
                }
            },
            {
                field: "ws",
                header: "WS",
                style: {
                    width: '38px'
                }
            },
            {
                field: "bs",
                header: "BS",
                style: {
                    width: '38px'
                }
            },
            {
                field: "s",
                header: "F",
                style: {
                    width: '38px'
                }
            },
            {
                field: "t",
                header: "E",
                style: {
                    width: '38px'
                }
            },
            {
                field: "w",
                header: "Pv",
                style: {
                    width: '38px'
                }
            },
            {
                field: "a",
                header: "A",
                style: {
                    width: '38px'
                }
            },
            {
                field: "ld",
                header: "Ld",
                style: {
                    width: '38px'
                }
            },
            {
                field: "sv",
                header: "Sv",
                style: {
                    width: '38px'
                }
            },
            {
                field: "pointValue",
                header: "Point",
                style: {
                    width: '38px'
                }
            },
            {
                field: "min",
                header: "Min",
                style: {
                    width: '38px'
                }
            },
            {
                field: "max",
                header: "Max",
                style: {
                    width: '38px'
                }
            }
        ];
    }

    dataSelected(figurine: Figurine): void {
        this.selectedFigurines = _.cloneDeep(figurine);
    }

    new(): void {
        let figurine = new Figurine();
        figurine.id = this.figurines.length;
        this.selectedFigurines = figurine;
        this.newFig = true;
    }


    save(args): void {

        this.newFig = false;
        if (args.action === "add") {
            this.addFigEvent.emit(args.formData)
            this.selectedFigurines = null;
        } else if (args.action === "update") {
            this.updateFigEvent.emit(args.formData)
            this.selectedFigurines = null;
        } else if (args.action === "delete") {
            this.updateFigEvent.emit(args.formData);
            this.selectedFigurines = null;

        }


    }
}
