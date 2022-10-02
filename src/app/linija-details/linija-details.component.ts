import { AfterViewInit, Component,  OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Linija } from '../linija';
import { Stanica } from '../linija';
import { LinijaService } from '../linija.service';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-linija-details',
  templateUrl: './linija-details.component.html',
  styleUrls: ['./linija-details.component.css']
})
export class LinijaDetailsComponent implements OnInit {

  linija: Linija | undefined;
  stanici: Stanica[] | undefined;
  apiLoaded: Observable<boolean>;

  center: google.maps.LatLngLiteral = {lat: 41.99646, lng: 21.43141};
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 12;

  constructor(
    private route: ActivatedRoute,
    private linijaService: LinijaService,
    private location: Location,
    httpClient: HttpClient
  ) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKuqUIymJLm4aPtmHgzUHmbckY3uGMeg', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {

    this.getLinija();

    this.stanici?.forEach(stanica => {
      this.markerPositions.push({
        lat: Number(stanica.langitude),
        lng: Number(stanica.longitude) } );
    });

    this.center = { lat: (this.markerPositions[0].lat + this.markerPositions[this.markerPositions.length-1].lat)/2.0,
      lng: (this.markerPositions[0].lng + this.markerPositions[this.markerPositions.length-1].lng)/2.0 };
  }

  getLinija(): void {
    const broj = Number(this.route.snapshot.paramMap.get('broj'));
    this.linijaService.getLinija(broj)
      .subscribe(linija => this.linija = linija);
    this.linijaService.getStanici(broj)
      .subscribe(stanici => this.stanici = stanici);
  }

  goBack(): void {
    this.location.back();
  }

};
