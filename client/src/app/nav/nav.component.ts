import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of, subscribeOn } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  constructor(public accountservcie: AccountService, 
    private router: Router
    ,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountservcie.login(this.model).subscribe({
      next: _ =>  this.router.navigateByUrl('/members')
      ,
      error: error => this.toastr.error(error.error)
    })
    console.log(this.model);
  }

  logout()
  {
    this.accountservcie.logout();
    this.router.navigateByUrl('/');
  }

}
