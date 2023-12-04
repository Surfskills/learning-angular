import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      first_name: 'Lucky',
      last_name: 'Dogbey',
      email: 'dogbey@gmail.com',
      cohort: '2024',
    },

    {
      id: 2,
      first_name: 'Oyin',
      last_name: 'Lade',
      email: 'lade@gmail.com',
      cohort: '2024',
    },

    {
      id: 3,
      first_name: 'Obehi',
      last_name: 'Ataga',
      email: 'ataga@gmail.com',
      cohort: '2024',
    },

    {
      id: 4,
      first_name: 'Precious',
      last_name: 'Deyemi',
      email: 'presh@gmail.com',
      cohort: '2024',
    },

    {
      id: 5,
      first_name: 'Emmanuel',
      last_name: 'Terwase',
      email: 'emmaterwase@gmail.com',
      cohort: '2024',
    },

    {
      id: 6,
      first_name: 'Fred',
      last_name: 'Osege',
      email: 'fred@gmail.com',
      cohort: '2024',
    },

    {
      id: 7,
      first_name: 'Abena',
      last_name: 'Okai',
      email: 'Abena@gmail.com',
      cohort: '2024',
    },

    {
      id: 8,
      first_name: 'Rachael',
      last_name: 'Ayomide',
      email: 'rachael@gmail.com',
      cohort: '2024',
    },

    {
      id: 9,
      first_name: 'Roy',
      last_name: 'Mohubu',
      email: 'roy@gmail.com',
      cohort: '2024',
    },
  ];

  viewUser: any;

  deleteUser(user: any): void {
    this.users = this.users.filter((u) => u.id !== user.id);
  }

  ngOnInit(): void {}
}
