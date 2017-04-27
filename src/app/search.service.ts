import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchResult } from './searchresult.interface';
import { Config } from './config.ts';

declare var SpotifyWebApi : any;

// Handles communication between the search and results components and the Spotify Web API
@Injectable()
export class SearchService {
    private resultsSource = new Subject<SearchResult[]>();
    private spotify : SpotifyWebApi;
    
    constructor() {
        this.spotify = new SpotifyWebApi();
        
        this.spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', 
            function(err, data) {
                if (err) console.error(err);
                else console.log('Artist albums', data);
            });

    }

    
    
    // Performs a search from the Spotify Web API with the given terms
    public search(text: string, methods: string[]) {
        // TODO
        
        var spotifyApi = new SpotifyWebApi();
        
        alert(text);
        var testResults = [{name: "Rocketeer's Song", type: "Track", length: "3 min", tracks: "1"}];
        this.sendResults(testResults);
    }
    
    // Sends an event with new results for ResultsComponents to display
    public sendResults(results: SearchResult[]) {
        this.resultsSource.next(results);
    }
    
    // Returns a result observable for the ResultsComponent to listen to
    public getResultsObservable() {
        return this.resultsSource;
    }
    
}