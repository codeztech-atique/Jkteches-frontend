import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router }    from '@angular/router';
import { NgForm }    from '@angular/forms';
import appSettings from '../../../config/app-settings';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'forgot-password',
	templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss']
})

export class ForgotPassword implements OnInit, OnDestroy {
  bg = '/assets/img/login-bg/login-bg-17.jpg';
  appSettings = appSettings;
  email: any;
  isDisabled: boolean;
  isInvalidEmail: boolean;

  constructor(private router: Router, private renderer: Renderer2, private titleService: Title) {
    this.appSettings.appEmpty = true;
    this.isDisabled = true;
    this.renderer.addClass(document.body, 'bg-white');
  }
  ngOnInit(): void {
    this.titleService.setTitle('Jkteches | Forgot Password Page');
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  checkm(e) {
    this.email = e;
    const emailId = document.getElementById('regEmailAddress');
    const emailRedgxPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (emailId != null) {
      if(this.email.match(emailRedgxPattern)) {
        // ✅ Add class
        emailId.classList.remove('is-invalid');
        emailId.classList.add('is-valid');
        this.isInvalidEmail = false;
        this.isDisabled = false;
      } else {
        // ✅ Remove class
        emailId.classList.remove('is-valid');
        emailId.classList.add('is-invalid');
        this.isInvalidEmail = true;
        this.isDisabled = true;
      }
    }
  }
}