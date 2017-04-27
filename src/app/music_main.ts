import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {AppComponent} from './music_app.component';
import {SearchService} from './search.service';

enableProdMode();
bootstrap(AppComponent, [SearchService]);