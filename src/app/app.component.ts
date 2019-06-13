import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { TdDialogService } from '@covalent/core/dialogs';

import { UsersService } from './services/users.service';
import { User } from './models/user.model';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true

})

export class AppComponent implements OnInit {

  title = 'ng-datatables-example';

  columns: ITdDataTableColumn[] = [

    { name: 'name', label: 'Name' },
    { name: 'username', label: 'Userame' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Phone' },
    { name: 'website', label: 'Website' },
    { name: 'company', label: 'Company' }

  ];

  usersData: User[] = [];

  constructor(private dialogService: TdDialogService, private usersService: UsersService) { }

  ngOnInit() {

    this.usersService.getUsers().subscribe(data => {

      this.usersData = data;
      console.log(this.usersData);

    });

  }

  openPrompt(row: any, name: string): void {

    this.dialogService.openPrompt({

      message: 'Enter Comment',
      value: row[name]

    }).afterClosed().subscribe((value: any) => {

      if (value !== undefined) {

        row[name] = value;

      }

    });

  }


}
