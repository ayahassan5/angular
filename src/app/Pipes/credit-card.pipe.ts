import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {
  x: number = 0;
  data: string = "";
  count: number = 0;
  transform(card: string): string {
    for (this.x = 0; this.x < card.length; this.x++) {
      var c = card.charAt(this.x);
      this.data += c;
      this.count++;
      if (this.x < 15 && this.count == 4) {
        this.data += "-";
        this.count = 0;
      }
    }
    return this.data;
  }
}
