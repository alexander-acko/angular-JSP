import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stanica } from './stanica';
import { STANICI } from './mock-stanici';

@Injectable({
  providedIn: 'root',
})

export class StanicaService {

  constructor() { }

  getStanici(): Observable<Stanica[]> {
    const stanici = of(STANICI);
    return stanici;
  }

  getStanica(broj: number): Observable<Stanica> {
    const stanica = STANICI.find(h => h.broj === broj)!;
    return of(stanica);
  }

  addFavStation(broj: number): void {
    const stanica = STANICI.find(h => h.broj === broj)!;
    stanica.favorite = !stanica.favorite;
    return;
  }

}
