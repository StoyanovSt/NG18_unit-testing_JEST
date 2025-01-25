import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsersService {
  // users: UserInterface[] = [];
  users$ = new BehaviorSubject<UserInterface[]>([]);

  addUser(user: UserInterface): void {
    // this.users = [...this.users, user];
    this.users$.next([...this.users$.getValue(), user]);
  }

  removeUser(userId: string): void {
    // this.users = this.users.filter((user) => user.id !== userId);
    this.users$.next(
      this.users$.getValue().filter((user) => user.id !== userId)
    );
  }
}
