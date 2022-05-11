import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ModalComponent,
    ReusableTableComponent
  ],
  exports:[
    NavbarComponent,
    ReusableTableComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
