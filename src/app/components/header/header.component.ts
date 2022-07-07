import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  scroll(selector: any) {
    const element = document.querySelector(selector);
    console.log(element)
    element ? element.scrollIntoView({behavior: "smooth"}): null;
  }

}
