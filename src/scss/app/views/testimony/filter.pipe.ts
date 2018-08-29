import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( testimony : any[], term: string ): any[] {
    if (!term ) { 
      return testimony;
     }

    return testimony.filter(function (testimonies){

        return testimonies.name.toLowerCase().includes(term.toLowerCase());
    });

  }

}
