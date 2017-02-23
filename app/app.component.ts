// A component has two halves: An annotation and a class definition.
// App Component is my ROOT Component - responsible for holding all of our data (our models), and for loading child components.

import { Component, Input,PipeTransform, Description } from '@angular/core';
import { Tap } from './tap.model'

@Component({
  selector: 'my-app',
  template: `
  <description></description>
  <h3 id='mainloop' *ngFor="let currentBeer of taps">
  <div id='boxes'>
    <div id ='alcoholbox' [style.opacity]="opacity(currentBeer)"></div>
    Name: {{currentBeer.name}} <br> <span [style.color]="getStyle(currentBeer)">Price: {{currentBeer.price}}</span> <br> Pints Left: {{currentBeer.pintsLeft}}
    <button (click)="
      pour(currentBeer);
    ">Pour</button>
    </div>
  </h3>
  <br>
  <br>
  <tenpints
  [childTaps]="taps"
  ></tenpints>
  <!-- <div style="color: blue" *ngFor="let currentTap of taps | pricy"> {{currentTap.name}} </div> -->
  `
})

export class AppComponent {
  public taps: Tap[] = [
    new Tap ('beer a','manua',7,0.05),
    new Tap ('beer b','manub',8,0.04),
    new Tap ('beer c','manuc',9,0.023),
    new Tap ('beer d','manud',6,0.1)
  ];
  pour(whatever){
    whatever.pintsLeft = whatever.pintsLeft-1;
  };
  getStyle(thisBeer){
    if(thisBeer.price<8) {
      return "green"
    }
    else {
      return "red"
    }
  }
  opacity(thisBeer){
    return thisBeer.content*8
  }
}
