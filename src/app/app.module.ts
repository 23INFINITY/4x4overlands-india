/*
=========================================================
* 4x4 Overlanders India - v1.0.0
=========================================================

* 
* Copyright 2024 Sourav Paul AKA 23INFINI8Y (23infini8y@gmail.com)
* Licensed under MIT

* Coded by Sourav Paul AKA 23INFINI8Y

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";


import { PagesModule } from "./pages/pages.module";

// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { environment } from "src/environments/environment";
@NgModule({
  declarations: [
    AppComponent
    // IndexComponent,
    // ProfilepageComponent,
    // RegisterpageComponent,
    // LandingpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    // BsDropdownModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // TooltipModule.forRoot(),
    // CollapseModule.forRoot(),
    // TabsModule.forRoot(),
    PagesModule,
    // PaginationModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // CarouselModule.forRoot(),
    // ModalModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebaseConfig),  // Initialize Firebase
    // AngularFireAuthModule,  // Add the authentication module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
