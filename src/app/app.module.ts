import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ScreenComponent } from "./screen/screen.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ScreenComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
