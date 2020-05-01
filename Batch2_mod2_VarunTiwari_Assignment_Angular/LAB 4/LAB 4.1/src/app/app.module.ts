import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddBookComponent } from './app.addBook';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { EmployeeService } from './app.bookservice';
 
@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddBookComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }