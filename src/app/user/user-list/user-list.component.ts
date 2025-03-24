import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Vignesh' },
    { id: 2, name: 'Kushwanth' },
    { id: 3, name: 'Naveen' },
  ];

  constructor(private router: Router) {}

  trackById(index: number, user: any) {
    return user.id;   //returns user.id for tracking
  }

  viewUser(userId: number) {
    this.router.navigate(['/users', userId]);   //navigates to the specific id after viw button is clicked
  }
}
