import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
    name:'filter'
})
export class MyPipe implements PipeTransform{

    transform(items: any[], option:string, searchText: string): any[] {
        console.log(items)
        console.log(searchText)
        console.log(option)

        if(!items) return [];
        if(!searchText) return items;
        if(option == "id"){
            return items.filter(a=>a.id.toString().toLowerCase().includes(searchText.toString().toLowerCase()));
        }
        else if(option == "year"){
            return items.filter(a=>a.year.toString().toLowerCase().includes(searchText.toString().toLowerCase()));
        }
        else if(option == "title"){
            return items.filter(a=>a.title.toString().toLowerCase().includes(searchText.toString().toLowerCase()));
        }
        else if(option == "author"){
            return items.filter(a=>a.author.toString().toLowerCase().includes(searchText.toString().toLowerCase()));
        }
    }
}