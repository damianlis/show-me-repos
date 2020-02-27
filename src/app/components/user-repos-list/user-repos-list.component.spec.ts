import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposListComponent } from './user-repos-list.component';

describe('UserReposListComponent', () => {
  let component: UserReposListComponent;
  let fixture: ComponentFixture<UserReposListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReposListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
