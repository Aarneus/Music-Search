import {Http, Inject, Injectable} from 'angular2/core';

@Injectable()
export class ConfigService {

    getConfig() {
        return this.http.request('./config.json').map(res => res.json());
    }
}