import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubApiService } from 'src/app/services/github-api.service';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-repos-list',
  templateUrl: './user-repos-list.component.html',
  styleUrls: ['./user-repos-list.component.scss']
})
export class UserReposListComponent implements OnInit {

  private user: string;
  public repos$: Observable<Repository[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: GithubApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.paramMap.get('user');
    this.repos$ = this.apiService.getRepos(this.user).pipe(
      catchError(errorObject => {
        this.router.navigate(['']);
        this.snackBar.open(`Oops something went wrong: ${errorObject.error.message}`, null, {
          duration: 4000
        });
        return throwError(errorObject);
      })
    );
  }

  public redirectToSearch(): void {
    this.router.navigate(['']);
  }

  public redirectToProfile(): void {
    this.repos$.subscribe(repos => {
      window.open(repos[0].owner.html_url, 'blank');
    });
  }

}
