import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusMark'
})
export class StatusMarkPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 1) {
      return "status-accepted"
    } else if (value == 2) {
      return "status-rejected"
    }

  }

}
