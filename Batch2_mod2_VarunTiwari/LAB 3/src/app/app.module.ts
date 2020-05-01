import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddProductComponent } from './app.addProduct';
import {FormsModule} from '@angular/forms'
@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddProductComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }