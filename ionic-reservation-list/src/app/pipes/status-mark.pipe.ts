import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusMark'
})
export class StatusMarkPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 1) {
      return "reservation-list__status-mark--accepted"
    } else if (value == 2) {
      return "reservation-list__status-mark--rejected"
    }

  }

}
