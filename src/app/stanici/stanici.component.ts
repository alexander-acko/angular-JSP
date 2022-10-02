import { Component, OnInit } from '@angular/core';
import { Stanica } from '../stanica';
import { StanicaService } from '../stanica.service';

@Component({
  selector: 'app-stanici',
  templateUrl: './stanici.component.html',
  styleUrls: ['./stanici.component.css']
})
export class StaniciComponent implements OnInit {

  stanici: Stanica[] = [];
  searchText ="";

  constructor(private stanicaService: StanicaService) { }

  ngOnInit(): void {
    this.getStanici();
  }

  getStanici(): void {
    this.stanicaService.getStanici()
      .subscribe(stanici => this.stanici = stanici);
  }

  addFavorite(stanica: Stanica): void {
    const broj = Number(stanica.broj);
    this.stanicaService.addFavStation(stanica.broj);
  }

}
