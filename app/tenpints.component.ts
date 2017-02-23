import { Component, Input, PipeTransform } from '@angular/core';
import { Tap } from './tap.model';

@Component ({
  selector: 'tenpints',
  template: `
  <button (click)="
    boo()
  ">Beers with less than 10 pints</button>

  <div *ngFor="let currentBeer of childTaps">
    <div *ngIf="currentBeer.pintsLeft>10 && bo==true">
      <h3> {{currentBeer.name}}  {{currentBeer.pintsLeft}} </h3>
    </div>
  </div>
  `
})

export class TenPints {
  @Input() childTaps: Tap[];
  bo = false;
  boo(){
    this.bo = !this.bo;
  }
}
