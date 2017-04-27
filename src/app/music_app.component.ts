import { Component, View } from 'angular2/core';
import { SearchComponent } from './search.component';
import { ResultsComponent } from './results.component';
import { SearchService } from './search.service';


@Component({
    selector: 'music-app'
})

@View({
    template: `
        <div class="container header">
        <img class="header-image img-fluid m-x-auto d-block" src="src/img/logo.png" />
        </div>
        
        <!-- Search box -->
        <search-box #search1></search-box>
         
        <!-- Results -->
        <search-results #results1></search-results>
        
        <div class="container footer" >
            Music Search - 2017
        </div>
    `,
    providers: [SearchService],
    directives: [SearchComponent, ResultsComponent]
})

export class AppComponent {
    constructor(private searchService: SearchService) {
    }
}