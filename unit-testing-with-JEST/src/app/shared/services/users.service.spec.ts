import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { UserInterface } from '../models/user.interface';

describe('UsersService', () => {
  let usersService: UsersService;
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
      const newUser: UserInterface = {
        id: '1',
        name: 'Stiliyan',
      };

      usersService.addUser(newUser);
      expect(usersService.users).toEqual([
        {
          id: '1',
          name: 'Stiliyan',
        },
      ]);
    });
  });

  describe('removeUser', () => {
    it('should remove an user from users array', () => {
      usersService.users = [
        {
          id: '1',
          name: 'Stiliyan',
        },
      ];
      const userId = '1';
      usersService.removeUser(userId);
      expect(usersService.users).toEqual([]);
    });
  });
});
