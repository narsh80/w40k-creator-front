import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DataEditComponent} from "./data-edit/data-edit.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {
        path: '40kEditor/home',
        component: HomeComponent
    },
    {
        path: '40kEditor/data-edit...',
        component: DataEditComponent
    },
    // {
    //   path: '40kEditor/army-creator...',
    //   component: TypeOptionsComponent,
    // },
    {
        path: '',
        redirectTo: '40kEditor/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
