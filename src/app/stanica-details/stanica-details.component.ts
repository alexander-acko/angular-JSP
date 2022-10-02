import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Stanica } from '../stanica';
import { StanicaService } from '../stanica.service';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-stanica-details',
  templateUrl: './stanica-details.component.html',
  styleUrls: ['./stanica-details.component.css']
})
export class StanicaDetailsComponent implements OnInit {

  apiLoaded: Observable<boolean>;
  stanica: Stanica | undefined;
  linii: string[] | undefined;

  center: google.maps.LatLngLiteral = {lat: 41.99646, lng: 21.43141};
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPosition: google.maps.LatLngLiteral = {lat: 41.99646, lng: 21.43141};
  zoom = 13;

  constructor(
    private route: ActivatedRoute,
    private stanicaService: StanicaService,
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
    this.getStanica();
    this.markerPosition = { lat: Number(this.stanica?.langitude), lng: Number(this.stanica?.longitude) };
    this.center = { lat: Number(this.stanica?.langitude), lng: Number(this.stanica?.longitude) };
  }

  getStanica(): void {
    const broj = Number(this.route.snapshot.paramMap.get('broj'));
    this.stanicaService.getStanica(broj)
      .subscribe(stanica => this.stanica = stanica);
    this.linii = this.stanica?.linii.split(" ");
  }

  addFavorite(stanica: Stanica): void {
    const broj = Number(this.route.snapshot.paramMap.get('broj'));
    this.stanicaService.addFavStation(stanica.broj);
  }

  goBack(): void {
    this.location.back();
  }

}
