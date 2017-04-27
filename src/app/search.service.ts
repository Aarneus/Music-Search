import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchResult} from './searchresult.interface';

declare var SpotifyWebApi : any;

// Handles communication between the search and results components and the Spotify Web API
@Injectable()
export class SearchService {
    private resultsSource = new Subject<SearchResult[]>();
    private spotify : SpotifyWebApi;
    private results : SearchResult[];
    private keepPreviousResults: boolean;
    
    
    constructor() {
        this.spotify = new SpotifyWebApi();
    }
    
    
    // Performs a search from the Spotify Web API with the given terms
    public search(text: string, methods: function[], keepPreviousResults: boolean) {
        // Get the results if there are any
        if (text != '') {
            // Keep track of new results if we don't want the results to jump up and down 
            // when entering incomplete words
            this.keepPreviousResults = keepPreviousResults;
            if (!keepPreviousResults) {
                this.results = [];
            }
            
            // Get the results
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
    
    
    
    // Searches the Spotify Web API for tracks with the given name
    public searchTracks(name: string, service: SearchService) {
        service.spotify.searchTracks('track:"' + name + '"', function(err, data) {
            if (err) console.error(err);
            else {
                var items = data.tracks.items;
                service.updatePreviousResults(items.length > 0);
                service.setNewResultsFromSpotify(items);
            };
        });
        return [];
    }
    
    // Searches the Spotify Web API for artists with the given name
    public searchArtists(name: string, service: SearchService) {
        service.spotify.searchArtists('"' + name + '"', function(err, data) {
            if (err) console.error(err);
            else {
                var items = data.artists.items;
                service.updatePreviousResults(items.length > 0);
                service.setNewResultsFromSpotify(items);
            };
        });
        return [];
    }
    
    // Searches the Spotify Web API for albums with the given name
    public searchAlbums(name: string, service: SearchService) {
        service.spotify.searchAlbums('"' + name + '"', function(err, data) {
            if (err) console.error(err);
            else {
                var items = data.albums.items;
                service.updatePreviousResults(items.length > 0);
                service.setNewResultsFromSpotify(items);
            };
        });
        return [];
    }
    
    
    // Searches the Spotify Web API for playlists with the given name
    public searchPlaylists(name: string, service: SearchService) {
        service.spotify.searchPlaylists('"' + name + '"', function(err, data) {
            if (err) console.error(err);
            else {
                var items = data.playlists.items;
                service.updatePreviousResults(items.length > 0);
                service.setNewResultsFromSpotify(items);
            };
        });
        return [];
    }
    
    
    // Formats a Spotify Object into a SearchResult
    private spotifyToSearchResult(item: any, type: string) {
        var result = {
            name:       item.name,
            type:       item.type,
            popularity: item.popularity,
            data:       null
        };
        
        if (item.type == "album") {
            result.type = item.album_type;
        }
        
        return result;
    }
    
    
    // Adds a result to the current result list if an equivalent is not already there
    private addResult(result: SearchResult) {
        var duplicate = false;
        
        for (r of this.results) {
            if (r.name == result.name && r.type == result.type) {
                duplicate = true;
                break;
            }        
        }
        
        if (!duplicate) {
            this.results.push(result);
        }
    }
    
    // Sets the new results from Spotify objects
    private setNewResultsFromSpotify(items: any[]) {
        // Format the results
        if (!this.keepPreviousResults) {
            for (item of items) {
                this.addResult(this.spotifyToSearchResult(item));
            }
            // Return the results
            this.sendResults(this.results);
        }
    }
    
    
    // Updates the previous results if needed
    private updatePreviousResults(newResults: boolean) {
        if (this.keepPreviousResults && newResults) {
            this.results = [];
            this.keepPreviousResults = false;
        }
    }
}