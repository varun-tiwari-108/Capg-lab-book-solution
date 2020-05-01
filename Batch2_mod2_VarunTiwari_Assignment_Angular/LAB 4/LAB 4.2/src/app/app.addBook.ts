import { Component,OnInit } from "@angular/core";
import {BookService} from './app.bookservice';

@Component({
    selector:'add-comp',
    templateUrl:'addbook.html'
})
export class AddBookComponent implements OnInit{

    status:string=""
    val:string=""

    constructor(private service:BookService){}
    bookAll:any[]=[];

    uId:number;
    uTitle:string;
    uAuthor:string;
    uYear:number;
    index:number=null;
    ngOnInit(){
        this.service.getAllBooks().subscribe((data:any)=>this.bookAll=data);
    }
    delete(i:number){
        this.bookAll.splice(i,1);
        alert("Are you sure you want to Delete?");
    }
    updateBook():any{
        if(this.index!=null){
           this.bookAll.splice(this.index,1,{id:this.uId,title:this.uTitle,author:this.uAuthor,year:this.uYear});
           this.uId=null;
           this.uTitle=null;
           this.uAuthor=null;
           this.uYear=null;
           this.index=null;
        }
        alert("Are you sure you want to Update?");
       }
   
       putBook(i:number):any{
           this.uId=this.bookAll[i].id;
           this.uTitle=this.bookAll[i].title;
           this.uAuthor=this.bookAll[i].author;
           this.uYear=this.bookAll[i].year;
           this.index=i;
       }
}