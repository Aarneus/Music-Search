import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';


// Handles communication between the search and results components and the Spotify Web API
@Injectable()
export class SearchService {
    
    
    
    public test(message) {
        alert(message);
    }
}