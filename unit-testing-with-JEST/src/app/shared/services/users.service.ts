import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user.interface';

@Injectable()
export class UsersService {
  users: UserInterface[] = [];

  addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  }

  removeUser(userId: string): void {
    this.users = this.users.filter((user) => user.id !== userId);
  }
}
