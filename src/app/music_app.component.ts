import {Component, View} from "angular2/core";
import { SearchComponent } from './search.component';

@Component({
    selector: 'music-app'
})

@View({
    template: `
        <div class="container header">
        <img class="header-image img-fluid m-x-auto d-block" src="src/img/logo.png" />
        </div>
        
        <!-- Search box -->
        <search-box></search-box>
         
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
            <div class="row">
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
            </div>
            <div class="row">
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
                <div class="col-xs-2">????</div>
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
            Music Search - Aarne Uotila - 2017
        </div>
  `,
  directives: [SearchComponent]
})

export class AppComponent {

}