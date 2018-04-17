import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { MainEmailComponent } from '../moduloemail/main-email/main-email.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminGuard } from '../services/admin.guard';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  declarations: [AdminMainComponent, AdminAddComponent, AdminEditComponent, AdminListComponent],
  providers: [AdminGuard]
})
export class AdminModule { }
