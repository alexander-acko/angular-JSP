import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Linija } from './linija';
import { Stanica } from './linija';
import { LINII } from './mock-linii';

@Injectable({
  providedIn: 'root',
})
export class LinijaService {

  constructor() { }

  getLinii(): Observable<Linija[]> {
    const linii = of(LINII);
    return linii;
  }

  getLinija(broj: number): Observable<Linija> {
    const linija = LINII.find(h => h.broj === broj)!;
    return of(linija);
  }

  getStanici(broj: number): Observable<Stanica[]> {
    const linija = LINII.find(h => h.broj === broj)!;
    return of(linija.stanici);
  }

  addFavLine(broj: number): void {
    const linija = LINII.find(h => h.broj === broj)!;
    linija.favorite = !linija.favorite;
    return;
  }
}
