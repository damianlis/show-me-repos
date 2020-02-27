import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposListItemComponent } from './user-repos-list-item.component';

describe('UserReposListItemComponent', () => {
  let component: UserReposListItemComponent;
  let fixture: ComponentFixture<UserReposListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReposListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
