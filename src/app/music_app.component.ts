import {Component, View} from "angular2/core";

@Component({
    selector: 'music-app'
})

@View({
    template: `
        <div class="container header">
        <img class="header-image img-fluid m-x-auto d-block" src="src/img/logo.png" />
        </div>
        
        <!-- Search box -->
        <div class="container search-box">
            <form>
                <div class="row">
                    <div class="col-xs-9 col-md-10">
                        <div class="input-group">
                            <input type="search" class="form-control" id="search-field" name="search-field" />
                            <span class="input-group-btn">
                                <button type="submit" class="btn search-button" id="search-button" name="search-button">
                                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span> Search
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-2">
                        <a href="#search-options" aria-expanded="false" aria-controls="search-options" data-toggle="collapse" class="btn search-button">
                            Search options
                        </a>
                    </div>
                </div>
                
                
                <div class="row search-advanced collapse" id="search-options">
                    <div class="col-xs-3 col-md-2 col-xl-1 checkbox">
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value="search-track"/>
                            <span class="custom-control-indicator search-checkbox"></span>
                            <span class="custom-control-description">Track</span>
                        </label>
                    </div>
                    <div class="col-xs-3 col-md-2 col-xl-1 checkbox">
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value="search-artist"/>
                            <span class="custom-control-indicator search-checkbox"></span>
                            <span class="custom-control-description">Artist</span>
                        </label>
                    </div>
                    <div class="col-xs-3 col-md-2 col-xl-1 checkbox">
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value="search-album"/>
                            <span class="custom-control-indicator search-checkbox"></span>
                            <span class="custom-control-description">Album</span>
                        </label>
                    </div>
                    <div class="col-xs-3 col-md-2 col-xl-1 checkbox">
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value="search-playlist"/>
                            <span class="custom-control-indicator search-checkbox"></span>
                            <span class="custom-control-description">Playlist</span>
                        </label>
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