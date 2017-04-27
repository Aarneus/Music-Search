import {Component, Output, EventEmitter, View, ViewChild} from "angular2/core";
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
                        <input #searchField (keyup)="search(true);" type="search" class="form-control" id="search-field" name="search-field" />
                        <span class="input-group-btn">
                            <button (click)="search(false);" type="button" class="btn search-button" id="search-button" name="search-button">
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
                <div class="col-xs-3 col-md-2 col-xl-1 checkbox" *ngFor="#category of categories; #i = index">
                    <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" value="search-{{category.term}}" (change)="setCategory(i, $event.target.checked);" [checked]="categories[i].checked" />
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
    
    // The input field for the search
    @ViewChild('searchField') searchText: any;
    
    // Search categories for the Spotify Web API
    private categories = [];
    
    // Catch the communication service and initialize the search categories
    // TODO: other than tracks
    constructor(private searchService:SearchService) {
        this.categories = [
        {term: "track",     label: "Track",     checked: true,      method: this.searchService.searchTracks},
        {term: "artist",    label: "Artist",    checked: true,      method: this.searchService.searchArtists},
        {term: "album",     label: "Album",     checked: true,      method: this.searchService.searchTracks},
        {term: "playlist",  label: "Playlist",  checked: false,     method: this.searchService.searchTracks}
        ];
    }
    
     
    // Set the given category and searches with the new category settings
    private setCategory(i:int, value:boolean) {
        this.categories[i].checked = value;
        this.search(false);
    }
    
    // Searches with the given terms from the Spotify Web API and displays the results
    private search(keepPreviousResults: boolean) {
        // Get the current list of active search categories
        var searchMethods = [];
        for category of this.categories {
            if (category.checked) {
                searchMethods.push(category.method);
            }
        }
        // Send the search
        this.searchService.search(this.searchText.nativeElement.value, searchMethods, keepPreviousResults);
    }
}
