import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { UserInterface } from '../models/user.interface';

describe('UsersService', () => {
  let usersService: UsersService;
  const user: UserInterface = {
    id: '1',
    name: 'Stiliyan',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
    });
    usersService = TestBed.inject(UsersService);
  });

  it('should create user service', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add an user to users array', () => {
      usersService.addUser(user);
      expect(usersService.users$.getValue()).toEqual([user]);
    });
  });

  describe('removeUser', () => {
    it('should remove an user from users array', () => {
      usersService.users$.next([user]);
      const userId = '1';
      usersService.removeUser(userId);
      expect(usersService.users$.getValue()).toEqual([]);
    });
  });
});
