import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLayoutComponent } from './layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppLayoutComponent]
})
export class LayoutModule { }
