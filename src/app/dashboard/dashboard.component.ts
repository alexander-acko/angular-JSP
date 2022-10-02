import { Component, OnInit } from '@angular/core';
import { Linija } from '../linija';
import { LinijaService } from '../linija.service';
import { Stanica } from '../stanica';
import { StanicaService } from '../stanica.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  linii: Linija[] = [];
  stanici: Stanica[] = [];

  constructor(private linijaService: LinijaService, private stanicaService: StanicaService) { }

  ngOnInit(): void {
    this.getLinii();
    this.getStanici();
  }

  getLinii(): void {
    this.linijaService.getLinii()
      .subscribe(linii => this.linii = linii.filter(linii => linii.favorite));
  }

  getStanici(): void {
    this.stanicaService.getStanici()
      .subscribe(stanici => this.stanici = stanici.filter(stanici => stanici.favorite));
  }

}
