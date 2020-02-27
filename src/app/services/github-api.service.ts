import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Repository } from '../models/repository';
import { map } from 'rxjs/operators';
import { REPOSITORIES } from '../mocks/repository-mock';
import { BRANCH } from '../mocks/branch-mock';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly URL = 'https://api.github.com/';

  constructor(private httpClient: HttpClient) { }

  getRepos(username: string): Observable<any> {
    // return this.httpClient.get<Repository[]>(`${this.URL}users/${username}/repos`)
    // .pipe(
    //   map((items: Repository[]) => items.filter(item => !item.fork))
    // );
    return of(REPOSITORIES).pipe(
      map(items => items.filter(item => !item.fork))
    );
  }

  getBranches(username: string, repo: string): Observable<any> {
    // return this.httpClient.get(`${this.URL}repos/${username}/${repo}/branches`);
    return of(BRANCH);
  }
}
