import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
const routes: Routes = [
  { path: '', component: UserListComponent },     //loads UserListComponent if there is no path in url
  { path: ':id', component: UserDetailComponent }   //loads UserDetailComponent if specific id is entered
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
