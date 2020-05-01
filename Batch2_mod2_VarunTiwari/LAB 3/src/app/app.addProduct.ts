
import { Component } from "@angular/core";

@Component
({
    selector:'add-comp',
    templateUrl:'addproduct.html'
})

export class AddProductComponent {
    proId:any;
    proName:any;
    proCost:any;
    proOnline:any;
    proCate:any;
    proStore1:any;

    proAll:any[]=[];
    array:any=document.getElementsByName("Store");
    avaliable:any="";

    addData():any{

        this.avaliable="";
        for(let data of this.array)
        {
            if(data.checked)
            {
                this.avaliable=this.avaliable+" "+data.value;
            }
        }
        
        this.proStore1
    this.proAll.push({proId:this.proId,proName:this.proName,proCost:this.proCost,proOnline:this.proOnline,proCate:this.proCate,proStore1:this.avaliable});
    //this.reset();
    }

}