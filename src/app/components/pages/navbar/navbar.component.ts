import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public fragment: string;


  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      // console.log(this.fragment);
    });
  }

  ngOnInit(): void {
  }

}
