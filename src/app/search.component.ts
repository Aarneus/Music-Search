import {Component, Output, EventEmitter, View} from "angular2/core";
import {SearchService} from './search.service';

@Component({
    selector: 'search-box'
})

@View({
    template: `
        <div class="container search-box">
            <!-- The search field and buttons -->
            <div class="row">
                <div class="col-xs-9 col-md-10 col-xl-11">
                    <div class="input-group">
                        <input (keyup)="search();" type="search" class="form-control" id="search-field" name="search-field" />
                        <span class="input-group-btn">
                            <button (click)="search();" type="button" class="btn search-button" id="search-button" name="search-button">
                                <span class="glyphicon glyphicon-search" aria-hidden="true"></span> Search
                            </button>
                        </span>
                    </div>
                </div>
                <div class="col-xs-3 col-md-2 col-xl-1">
                    <a href="#search-options" aria-expanded="false" aria-controls="search-options" data-toggle="collapse" class="btn search-button">
                        Advanced
                    </a>
                </div>
            </div>
            
            <!-- Advanced search options -->
            <div class="row search-advanced collapse" id="search-options">
                <div class="col-xs-3 col-md-2 col-xl-1 checkbox" *ngFor="#category of categories">
                    <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" value="search-{{category.term}}" checked />
                        <span class="custom-control-indicator search-checkbox"></span>
                        <span class="custom-control-description">{{category.label}}</span>
                    </label>
                </div>
               
            </div>
        </div>
    `,
    providers: [SearchService]
})

export class SearchComponent {
    
    // Catch the communication service
    constructor(private searchService:SearchService) {
    }
    
    
    // Search categories for the Spotify Web API
    private categories = [
        {term: "track",     label: "Track"},
        {term: "artist",    label: "Artist"},
        {term: "album",     label: "Album"},
        {term: "playlist",  label: "Playlist"},
        ];
    
    // Searches with the given terms from the Spotify Web API and displays the results
    private search() {
        // TODO
        var testResults = [{name: "Rocketeer's Song", type: "Track", length: "3 min", tracks: "1"}];
        this.searchService.sendResults(testResults);
    }
}
