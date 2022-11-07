import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.recargaPagina();
  }

  irPage(){
    this.router.navigate(["/login"])
  }
  recargaPagina()
  {
    Notiflix.Loading.circle();
    Notiflix.Loading.remove(500);
  } 

}
