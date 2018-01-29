import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { LogUser } from '../log-user';
import { LocalApiService } from '../local-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

}
