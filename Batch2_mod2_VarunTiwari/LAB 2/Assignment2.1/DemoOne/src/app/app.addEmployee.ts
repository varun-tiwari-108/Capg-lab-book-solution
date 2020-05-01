import{Component}from '@angular/core';
@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;
    empDept:string;

    empId1:number;
    empName1:string;
    empSalary1:number;
    empDept1:string;
    index:number=null;


    empAll:any[]=[
        {empId:1001,empName:"Rahul",empSalary:9000,empDept:"java"},
        {empId:1002,empName:"Sachin",empSalary:19000,empDept:"OraApps"},
        {empId:1003,empName:"Vikash",empSalary:29000,empDept:"BI"},
    ];
    empAll2:any[]=[];


    addEmployee():any{
        this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDept:this.empDept})
        console.log("Employee Added......"+this.empAll);
        this.empSalary=null;
        this.empDept=null;
        this.empName=null;
        this.empId=null;
        
    }
    deleteEmployee(data:number):any{
        this.empAll.splice(data,1);
    }
     
    updateEmployee():any{
        if(this.index!=null){
           this.empAll.splice(this.index,1,{empId:this.empId1,empName:this.empName1,empSalary:this.empSalary1,empDept:this.empDept1});
        }
           this.empSalary1=null;
           this.empDept1=null;
           this.empName1=null;
           this.empId1=null;
           this.index=null;
        
        alert("Update done.....");
       }

    Employee(i:number):any{
        this.empId1=this.empAll[i].empId;
        this.empName1=this.empAll[i].empName;
        this.empSalary1=this.empAll[i].empSalary;
        this.empDept1=this.empAll[i].empDept;
        this.index=i;
    }
}