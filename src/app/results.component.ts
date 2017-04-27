import {Component, View} from 'angular2/core';
import {SearchService} from './search.service';
import {SearchResult} from './searchresult.interface';


@Component({
    selector: 'search-results'
})

@View({
    template: `
        <!-- Results -->
        <div class="container results" *ngIf="results">
            <!-- The header row -->
            <div class="row results-header">
                <div class="col-xs-7">Name</div>
                <div class="col-xs-2">Type</div>
                <div class="col-xs-3">Popularity</div>
            </div>
            
            <!-- Results table -->
            <div class="row" *ngFor="#row of results">
                <div class="col-xs-7">{{row.name}}</div>
                <div class="col-xs-2">{{row.type}}</div>
                <div class="col-xs-3">{{row.popularity}}</div>
            </div>
        </div>
        
        <div class="container results" *ngIf="!results">
            No results
        </div>
    `
    providers: [SearchService]
})

export class ResultsComponent {
    
    
    
    // Catch the communication service
    constructor(private searchService:SearchService) {
        this.searchService.getResultsObservable().subscribe(
            results => { this.showResults(results); }
        );
        
    }
    
    // Sets the result
    private showResults(results: SearchResult[]) {
        this.results = results;
    }
    
    
    
    // Results
    private results: SearchResult[] = null
}    
