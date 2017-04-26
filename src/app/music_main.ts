import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './music_app.component';
import {SearchService} from './search.service';

//enableProdMode();
bootstrap(AppComponent, [SearchService]);