import { Component, OnInit, signal } from '@angular/core';
import { inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from "@angular/router";
import { AsyncPipe } from '@angular/common';
import { BeautifyPipe } from '../../pipes/beautify-pipe';


@Component({
  selector: 'app-users-page',
  imports: [RouterLink, AsyncPipe, BeautifyPipe],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage{
  private userService = inject(UserService);

  users = this.userService.getUsers();

  types = [
  'in-app',
  'push-notifications'
]
}

