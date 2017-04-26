import {Component, View} from 'angular2/core';


@Component({
    selector: 'search-results'
})

@View({
    template: `
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
    `
})

export class ResultsComponent {
}    
