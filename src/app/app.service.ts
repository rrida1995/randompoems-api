import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class AppService {

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {}

    // API GET for fetching random poems data
    getData() {
        const URL = `https://any-api.com:8443/https://www.poemist.com/api/v1/randompoems`;
        return this.http.get(URL);
    }
}