import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceComponent } from './e-commerce/e-commerce.component';



@NgModule({
  declarations: [
    ECommerceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ECommerceComponent
  ]
})
export class SalesModule { }
