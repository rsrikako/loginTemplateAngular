import { Component, OnInit } from '@angular/core';
import { faBars, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  faBars = faBars;
  faHome = faHome;
  faUser = faUser;
  menuActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.menuActive = !this.menuActive;
  }

}
