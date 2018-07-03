import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( roles : any[], term: string ): any[] {
    if (!term ) { return roles; }

    return roles.filter(function (role){

        return role.name.toLowerCase().includes(term.toLowerCase());
    });

  }

}
