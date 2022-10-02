import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {LinijaService} from "../linija.service";
import {Location} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  apiLoaded: Observable<boolean>;

  center: google.maps.LatLngLiteral = {lat: 41.99646, lng: 21.43141};
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  zoom = 12;

  markers = [
    // Osum markeri za sekoj punkt za personalizacija posebno
    { lat: 42.001605, lng: 21.4604117, title: "АВТОКОМАНДА" },
    { lat: 42.0014659, lng: 21.4053975, title: "КАРПОШ" },
    { lat: 42.00148392, lng: 21.44018208, title: "БИТ ПАЗАР" },
    { lat: 41.9858617, lng: 21.4644779, title: "АЕРОДРОМ - КАПИТОЛ" },
    { lat: 42.00694, lng: 21.3740382, title: "ВЛАЕ" },
    { lat: 41.9922799, lng: 21.4291582, title: "ЦЕНТАР" }
  ];

  constructor(private route: ActivatedRoute,
              private location: Location,
              httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKuqUIymJLm4aPtmHgzUHmbckY3uGMeg', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
  }


}
