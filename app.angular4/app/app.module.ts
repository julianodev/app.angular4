import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FormsComponent } from "./forms.component";
import { HomeComponent } from "./home.component";

const ROUTES: Routes = new Array(
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    });


@NgModule({
    declarations:
    [
        AppComponent,
        HomeComponent,
        FormsComponent
    ],
    imports:
    [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
