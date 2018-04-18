import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { MainEmailComponent } from '../moduloemail/main-email/main-email.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminGuard } from '../services/admin.guard';

const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: AdminMainComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: 'listado', pathMatch: 'full' },
      { path: 'listado', component: AdminListComponent },
      { path: 'crear', component: AdminAddComponent },
      { path: 'editar/:id', component: AdminEditComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
