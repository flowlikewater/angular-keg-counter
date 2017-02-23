// A component has two halves: An annotation and a class definition.
// App Component is my ROOT Component - responsible for holding all of our data (our models), and for loading child components.

import { Component, Input, PipeTransform } from '@angular/core';
import { Tap } from './tap.model'

@Component({
  selector: 'description',
  template: `
  <h1>Tap Room App</h1>
  <h3>Price:  <$8 in <span style='color: green'>Green</span>; >$8 in <span style='color: red'>Red</span></h3>
  <br>
  <div id='lightbeer'>light beer</div>
  <div id='strongbeer'>strong beer</div>
  <br>
  `
})

export class Description {

}
