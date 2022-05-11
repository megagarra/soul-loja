import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})


export class NavbarComponent implements OnInit {



  nomeDoApp: string = 'Soul Loja';

  constructor() { }

  ngOnInit(): void {


  }

}
