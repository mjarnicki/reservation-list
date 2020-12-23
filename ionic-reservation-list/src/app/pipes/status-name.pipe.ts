import { Pipe, PipeTransform } from '@angular/core';
import { HttpService } from '../services/http.service';

@Pipe({
  name: 'statusName'
})
export class StatusNamePipe implements PipeTransform {

  dictionary: string[];

  constructor(
    private httpService: HttpService) { }

  transform(value: number): string {

    return this.httpService.dictionary.split(',')[value];
  }

}
