import {Component, View} from "angular2/core";

@Component({
    selector: 'music-app'
})

@View({
    template: `
        <div class="container-fluid header">
        <h2>Music Search</h2>
        </div>
        
        <!-- Search box -->
        <div class="container-fluid search-box">
            <div class="row">
                <div class="col-xs-9">Search input here</div>
                <div class="col-xs-3">Search button</div>
            </div>
            <div class="row search-advanced">
                <div class="col-xs-1">Track</div>
                <div class="col-xs-1">Artist</div>
                <div class="col-xs-1">Album</div>
                <div class="col-xs-1">Playlist</div>
                <div class="col-xs-2">Hide advanced</div>
                
            </div>
        </div>
        
        <div class="container-fluid results">
            <div class="row results-header">
                <div class="col-xs-2">Track</div>
                <div class="col-xs-2">Artists</div>
                <div class="col-xs-2">Album</div>
                <div class="col-xs-2">Length</div>
                <div class="col-xs-2">Popularity</div>
                <div class="col-xs-2">Explicit</div>
            </div>
            
            <div class="row">
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
            </div>
        </div>
        
        
        <div class="container-fluid footer">
            Footer
        </div>
  `
})

export class AppComponent {

}