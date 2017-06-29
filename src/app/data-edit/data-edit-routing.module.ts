import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OptionComponent} from "./option/option.component";
import {ArmyComponent} from "./army/army.component";
import {TypeFigurineComponent} from "./type-figurine/type-figurine.component";
import {KeywordComponent} from "./keyword/keyword.component";
import {AbilitiesComponent} from "./abilities/abilities.component";
import {UnitsComponent} from "./units/units.component";

const routes: Routes = [
  {
    path: '40kEditor/data-edit/options',
    component : OptionComponent
  },
  {
    path: '40kEditor/data-edit/army',
    component : ArmyComponent
  },
  {
    path: '40kEditor/data-edit/type-figurine',
    component : TypeFigurineComponent
  },
  {
    path: '40kEditor/data-edit/keyword',
    component : KeywordComponent
  },
  {
    path: '40kEditor/data-edit/abilities',
    component : AbilitiesComponent
  },
  {
    path: '40kEditor/data-edit/units',
    component : UnitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEditRoutingModule { }
