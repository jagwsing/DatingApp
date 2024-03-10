import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of, subscribeOn } from 'rxjs';
import { User } from '../_models/user';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  constructor(public accountservcie: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountservcie.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
    console.log(this.model);
  }

  logout()
  {
    this.accountservcie.logout();
  }

}
