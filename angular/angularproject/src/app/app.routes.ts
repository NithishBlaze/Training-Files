import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { AngFormComponent } from './forms/ang-form/ang-form.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { MainDashBoardComponent } from './layout/main-dash-board/main-dash-board.component';
import { ParentComponent } from './parent/parent.component';
import { ItemComponent } from './item/item.component';
import { ProductDashComponent } from './CRUD/product-dash/product-dash.component';
import { ProductAddComponent } from './CRUD/product-add/product-add.component';
import { ProductEditComponent } from './CRUD/product-edit/product-edit.component';
import { authGuard } from './shared/custguard/auth.guard';
export const routes: Routes = [
    // 1.naming routing
    { path: "login", component: LoginComponent },
    // 2.default routing
    { path: "", component: LoginComponent },
    // 3.Redirect Routing
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "mainDashboard", component: MainDashBoardComponent,canActivate:[authGuard], children: [
            { path: "parent", component: ParentComponent },
            { path: "item", component: ItemComponent },
            { path: "databinding", component: DatabindingComponent },
            // 4. Parameterized Routing
            { path: "mypipe/:id", component: MypipesComponent },
            // 5.Child Routing
            {
                path: "angform", component: AngFormComponent, children: [
                    { path: "utdf", component: UtdfComponent },
                    { path: "rtf", component: RtfComponent },
                ]
            },
            {path:"productdash", component:ProductDashComponent},
            {path:"productadd", component:ProductAddComponent},
            {path:"productedit/:id", component:ProductEditComponent},



        ]
    },
    { path: "**", component: PageNotFoundComponent }

];
