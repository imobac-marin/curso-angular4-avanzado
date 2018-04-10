// Importar módulos necesarios para crear módulos.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardarEmailComponent } from './guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './main-email/main-email.component';
import { FormsModule } from '@angular/forms';

// Decorar ngModule para cargar los componentes y la configuración de los módulos.
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent],
  exports: [MainEmailComponent]
})
export class ModuloemailModule { }
