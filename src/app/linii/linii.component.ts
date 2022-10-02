import { Component, OnInit } from '@angular/core';
import { Linija } from '../linija';
import { LinijaService } from '../linija.service';
import {Stanica} from "../stanica";

@Component({
  selector: 'app-linii',
  templateUrl: './linii.component.html',
  styleUrls: ['./linii.component.css']
})

export class LiniiComponent implements OnInit {

  linii: Linija[] = [];

  constructor(private linijaService: LinijaService) { }

  ngOnInit(): void {
    this.getLinii();
  }

  getLinii(): void {
    this.linijaService.getLinii()
      .subscribe(linii => this.linii = linii);
  }

  addFavorite(linija: Linija): void {
    const broj = Number(linija.broj);
    this.linijaService.addFavLine(linija.broj);
  }
}
