import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GithubApiService } from 'src/app/services/github-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  public readonly SHOW_ME_REPOS = 'Show Me Repos';

  userFormControl = new FormControl('', [Validators.required]);

  constructor(
    private apiService: GithubApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  startSearch(): any {
    this.userFormControl.markAsTouched();
    if (this.userFormControl.valid) {
      this.router.navigate(['list', this.userFormControl.value]);
    }
  }

}
