import {Component, View} from "angular2/core";
import { SearchComponent } from './search.component';
import { ResultsComponent } from './results.component';

@Component({
    selector: 'music-app'
})

@View({
    template: `
        <div class="container header">
        <img class="header-image img-fluid m-x-auto d-block" src="src/img/logo.png" />
        </div>
        
        <!-- Search box -->
        <search-box></search-box>
         
        <!-- Results -->
        <search-results></search-results>
        
        <div class="container footer">
            Music Search - Aarne Uotila - 2017
        </div>
  `,
  directives: [SearchComponent, ResultsComponent]
})

export class AppComponent {

}