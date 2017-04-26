import {Component, View} from "angular2/core";

@Component({
    selector: 'music-app'
})

@View({
    template: `
        <div class="container header">
        <h2>Music Search</h2>
        </div>
        
        <!-- Search box -->
        <div class="container search-box">
            <form>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="input-group">
                            <input type="search" class="form-control" id="search-field" name="search-field" />
                            <span class="input-group-btn">
                                <button type="submit" class="btn" id="search-button" name="search-button">
                                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span> Search!
                                </button>
                            </span>
                            
                        </div>
                    </div>
                </div>
                
                
                <div class="row search-advanced">
                    <div class="col-xs-2 checkbox">
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value="search-track"/>
                            <span class="custom-control-indicator search-checkbox"></span>
                            <span class="custom-control-description">Track</span>
                        </label>
                    </div>
                    <div class="col-xs-2 checkbox">
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value="search-artist"/>
                            <span class="custom-control-indicator search-checkbox"></span>
                            <span class="custom-control-description">Artist</span>
                        </label>
                    </div>
                    <div class="col-xs-2 checkbox">
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value="search-album"/>
                            <span class="custom-control-indicator search-checkbox"></span>
                            <span class="custom-control-description">Album</span>
                        </label>
                    </div>
                    <div class="col-xs-2 checkbox">
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value="search-playlist"/>
                            <span class="custom-control-indicator search-checkbox"></span>
                            <span class="custom-control-description">Playlist</span>
                        </label>
                    </div>
                    <div class="col-xs-4">
                        <a href="#" class="search-advanced-link"> Hide advanced</a>
                    </div>
                </div>
                
                <div class="row search-advanced">
                    <div class="col-xs-12">
                        <a href="#" class="search-advanced-link">Show advanced</a>
                    </div>
                </div>
            </form>
        </div>
        
        <!-- Results -->
        <div class="container results">
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
        
        
        <div class="container footer">
            Footer
        </div>
  `
})

export class AppComponent {

}