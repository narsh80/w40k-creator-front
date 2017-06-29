import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataEditRoutingModule} from "./data-edit-routing.module";
import {DataEditComponent} from "./data-edit.component";
import {AppSharedModule} from "../shared/app-shared.module";
import {DataTableComponent} from './data-table/data-table.component';
import {OptionComponent} from './option/option.component';
import {OptionService} from "./option/shared/option.service";
import {OptionFormComponent} from './option/option-form/option-form.component';
import {ArmyComponent} from './army/army.component';
import {ArmyFormComponent} from './army/army-form/army-form.component';
import {ArmyService} from "./army/shared/army.service";
import {TypeFigurineComponent} from './type-figurine/type-figurine.component';
import {TypeFigurineFormComponent} from './type-figurine/type-figurine-form/type-figurine-form.component';
import {TypeFigurineService} from "./type-figurine/shared/type-figurine.service";
import {KeywordComponent} from './keyword/keyword.component';
import {KeywordFormComponent} from './keyword/keyword-form/keyword-form.component';
import {KeywordService} from "./keyword/shared/keyword.service";
import {AbilitiesComponent} from './abilities/abilities.component';
import {AbilitiesFormComponent} from './abilities/abilities-form/abilities-form.component';
import {AbilitiesService} from "./abilities/shared/abilities.service";
import { UnitsComponent } from './units/units.component';
import { UnitFormComponent } from './units/unit-form/unit-form.component';
import { FigurinesComponent } from './figurines/figurines.component';
import {UnitService} from "./units/shared/unit.service";
import { FigurineFormComponent } from './figurines/figurine-form/figurine-form.component';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    DataEditRoutingModule
  ],
  providers: [OptionService, ArmyService, TypeFigurineService, KeywordService, AbilitiesService, UnitService],
  declarations: [DataEditComponent, DataTableComponent, OptionComponent,
    OptionFormComponent, ArmyComponent, ArmyFormComponent, TypeFigurineComponent, TypeFigurineFormComponent, KeywordComponent,
    KeywordFormComponent, AbilitiesComponent, AbilitiesFormComponent, UnitsComponent, UnitFormComponent, FigurinesComponent, FigurineFormComponent]
})
export class DataEditModule {
}
