import {Component, View} from 'angular2/core';
import {SearchService} from './search.service';


@Component({
    selector: 'search-results'
})

@View({
    template: `
        <div class="container results">
            <!-- The header row -->
            <div class="row results-header">
                <div class="col-xs-6">Name</div>
                <div class="col-xs-2">Type</div>
                <div class="col-xs-1">Tracks</div>
                <div class="col-xs-3">Length</div>
            </div>
            
            <!-- Results table -->
            <div class="row" *ngFor="#row of results">
                <div class="col-xs-6">{{row.name}}</div>
                <div class="col-xs-2">{{row.type}}</div>
                <div class="col-xs-1">{{row.tracks}}</div>
                <div class="col-xs-3">{{row.length}}</div>
            </div>
            
        </div>
    `
    providers: [SearchService]
})

export class ResultsComponent {
    
    // Catch the communication service
    constructor(private searchService:SearchService) {
    }
    
    // Results
    private results = [
        {name: "Johnny's Album", type: "Album", length: "1 hr 15 min", tracks: "12"},
        {name: "Johnny's Album 2", type: "Album", length: "2 hr 5 min", tracks: "11"},
        {name: "Johnny's Album 3: The Johnnybaloo", type: "Album", length: "24 hr", tracks: "120"}
    ];
}    
