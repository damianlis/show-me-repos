import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserReposListComponent } from './components/user-repos-list/user-repos-list.component';


const routes: Routes = [
  { path: '', component: UserSearchComponent },
  { path: 'list/:user', component: UserReposListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
