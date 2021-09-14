import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {RegisterComponent} from '../register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  showError = false;

  constructor(private router: Router,
              private matDialog: MatDialog)
  {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  login(form: NgForm): void {
    const {email, password} = form.value;
    if(form.valid){
      if(email === "teste@teste.com" && password === "123456")
        this.router.navigate(['/home']);
      else
      {
        this.showError = true;
      }
    }

  }

  openRegister(): void {
    const dialogRef = this.matDialog.open(RegisterComponent, {
      role: 'dialog',
      height: '480px',
      width: '480px'
    });

  }


}
