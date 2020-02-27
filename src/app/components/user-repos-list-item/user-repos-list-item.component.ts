import { Component, OnInit, Input } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { GithubApiService } from 'src/app/services/github-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-repos-list-item',
  templateUrl: './user-repos-list-item.component.html',
  styleUrls: ['./user-repos-list-item.component.scss']
})
export class UserReposListItemComponent implements OnInit {

  @Input() repo: Repository;

  public branches$: Observable<any>;

  constructor(private apiService: GithubApiService) { }

  ngOnInit(): void {
    this.branches$ = this.apiService.getBranches(this.repo?.owner?.login, this.repo?.name);
  }

}
