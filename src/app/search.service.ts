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
    private results : SearchResult[];
    
    
    constructor() {
        this.spotify = new SpotifyWebApi();
    }
    
    
    // Searches the Spotify Web API for tracks with the given name
    public searchTracks(name: string, service: SearchService) {
        service.spotify.searchTracks('track:"' + name + '"', function(err, data) {
            if (err) console.error(err);
            else {
                console.warn("JOU:", data.tracks.items);
                for (item of data.tracks.items) {
                    service.results.push({
                        name:   item.name,
                        type:   "Track",
                        length: service.formatLength(item.duration_ms),
                        tracks: 1
                    });
                    
                }
                service.sendResults(service.results);
            };
        });
        return [];
    }
    
    
    
    
    
    // Performs a search from the Spotify Web API with the given terms
    public search(text: string, methods: function[]) {
        // Get the results if there are any
        if (text != '') {
            this.results = [];
            for (method of methods) {
                method(text, this);
            }
        }
        
        // No text, no search
        else {
            this.sendResults([]);
        }
    }
    
    // Sends an event with new results for ResultsComponents to display
    public sendResults(results: SearchResult[]) {
        this.resultsSource.next(results.length > 0 ? results : null);
    }
    
    // Returns a result observable for the ResultsComponent to listen to
    public getResultsObservable() {
        return this.resultsSource;
    }
    
    // Formats a millisecond count to a human readable number
    private formatLength(length:integer) {
        return length/1000/60;
    }
    
}