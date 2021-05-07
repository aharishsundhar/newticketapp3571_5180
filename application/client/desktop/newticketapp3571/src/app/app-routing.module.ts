import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'addticket', loadChildren: () => import('./addticket/addticket.module').then(m => m.AddticketModule), canActivate: [AuthGuard] } , 
{ path : 'alltickets', loadChildren: () => import('./alltickets/alltickets.module').then(m => m.AllticketsModule), canActivate: [AuthGuard] } , 
{ path : 'updateticket', loadChildren: () => import('./updateticket/updateticket.module').then(m => m.UpdateticketModule), canActivate: [AuthGuard] } , 
{ path : 'searchupdateticket', loadChildren: () => import('./searchupdateticket/searchupdateticket.module').then(m => m.SearchupdateticketModule), canActivate: [AuthGuard] } , 
{ path : 'addtypes', loadChildren: () => import('./addtypes/addtypes.module').then(m => m.AddtypesModule), canActivate: [AuthGuard] } , 
{ path : 'addseverity', loadChildren: () => import('./addseverity/addseverity.module').then(m => m.AddseverityModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
