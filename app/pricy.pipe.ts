import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { Tap } from './tap.model';

@Pipe({
  name: "pricy",
  pure: false
})

export class PricyPipe implements PipeTransform {
  transform(input: Tap[], args) {
    var output: Tap[] = [];
    for (var i=0; i<input.length; i++) {
      if (input[i].price<=8) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
