import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
