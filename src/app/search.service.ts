import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchResult } from './searchresult.interface';
import { Config } from './config.ts';


// Handles communication between the search and results components and the Spotify Web API
@Injectable()
export class SearchService {

    // Forwards search results
    private resultsSource = new Subject<SearchResult[]>();
    
    
    
    // Performs a search from the Spotify Web API with the given terms
    public search(text: string, methods: string[]) {
        alert(config.clientID);
    }
    
    // Sends an event with new results for ResultsComponents to display
    public sendResults(results: SearchResult[]) {
        alert(Config);
        this.resultsSource.next(results);
    }
    
    // Returns a result observable for the ResultsComponent to listen to
    public getResultsObservable() {
        return this.resultsSource;
    }
    
}