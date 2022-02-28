import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeListComponent } from './shape-list/shape-list.component';
import { CanvasElementComponent } from './canvas-element/canvas-element.component';
import { ShapeFnMenuComponent } from './shape-fn-menu/shape-fn-menu.component';
import { ColorListComponent } from './color-list/color-list.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeListComponent,
    CanvasElementComponent,
    ShapeFnMenuComponent,
    ColorListComponent,
    SettingsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
