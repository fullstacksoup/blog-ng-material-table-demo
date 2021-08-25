import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUsersTableComponent } from './components/random-users-table/random-users-table.component';


const routes: Routes = [
  {
    path: '',
    component: RandomUsersTableComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
