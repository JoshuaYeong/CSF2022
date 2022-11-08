import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild(MatDrawer)
  drawer!: MatDrawer

  constructor() { }

  ngOnInit(): void {

  }

  toggleSidebar() {
    console.log(":::Toggle Sidebar: ", this.drawer)
    this.drawer.toggle()
  }

}