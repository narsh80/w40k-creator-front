import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/primeng";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    items: MenuItem[];

    constructor() {
    }

    ngOnInit() {
        this.items = [
            {
                label: '',
                icon: 'fa-home',
                routerLink: "/"
            },
            {
                label: 'Gestion des données warhammer 40k',
                icon: 'fa-cogs',
                items: [
                    {label: "Type d'options", routerLink: "/40kEditor/data-edit/type-options"},
                    {label: "Gestion des options", routerLink: "/40kEditor/data-edit/options"},
                    {label: "Gestion des armées", routerLink: "/40kEditor/data-edit/army"},
                    {label: "Gestion des type des figurines", routerLink: "40kEditor/data-edit/type-figurine"},
                    {label: "Gestion des keywords", routerLink: "40kEditor/data-edit/keyword"},
                    {label: "Gestion des rêgles spéciales", routerLink: "40kEditor/data-edit/abilities"},
                    {label: "Gestion des unités", routerLink: "40kEditor/data-edit/units"},
                ]
            }
        ];

    }

}
