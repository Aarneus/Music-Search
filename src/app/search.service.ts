import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchResult } from './searchresult.interface';


// Handles communication between the search and results components and the Spotify Web API
@Injectable()
export class SearchService {
    
    
    // Holds the results
    private resultsSource = new Subject<any>();
    
    
    
    // Displays the results
    public setResults(results: SearchResult[]) {
        this.resultsSource.next("TEST");
    }
    
    // Returns a result observable for the ResultsComponent to listen to
    public getResultsObservable() {
        return this.resultsSource;
    }
    
}