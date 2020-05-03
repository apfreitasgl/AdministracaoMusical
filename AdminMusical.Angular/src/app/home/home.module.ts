import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    MenuComponent
  ]
})
export class HomeModule { }
