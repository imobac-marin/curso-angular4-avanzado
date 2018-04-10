import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminMainComponent, AdminAddComponent, AdminEditComponent, AdminListComponent]
})
export class AdminModule { }
